import * as React from 'react';
import moment from 'moment';

import styles from './style.module.css';
import { Moment } from 'moment/moment';

interface IProps {
  datetime: any;
  onClose?(): void;
  onChange(value?: Date | Moment): void;
  minDate?: Moment;
  maxDate?: Moment;
  naturalScroll?: boolean;
  dateFormat?: string;
  timeFormat?: string;
  placeholder?: string;
  allowClear?: boolean;
  customDisplay?: undefined;
}
interface IState {
  active: boolean;
  warning: boolean;
  calendar: Moment | null;
  datetime: Moment | null;
}
class TimeInputScroller extends React.Component<IProps, IState> {
  current: Moment;
  wrapper: HTMLDivElement | undefined | null;
  constructor(props: IProps) {
    super(props);
    this.wrapper = undefined;
    this.current = moment();

    let datetime = null;
    if (this.props.datetime) {
      if (!this.props.datetime._isAMomentObject) {
        datetime = this.props.datetime.clone();
      } else {
        datetime = moment(this.props.datetime);
      }
    }

    this.state = {
      active: true,
      warning: false,
      calendar: datetime,
      datetime: datetime,
    };

    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClickOutside);
  }

  handleClickOutside(event: any) {
    if (this.state.active && this.wrapper && !this.wrapper.contains(event.target)) {
      this.setState({ active: false }, this.props.onClose);
    }
  }

  clear() {
    this.setState(
      {
        active: false,
        datetime: null,
        calendar: null,
      },
      () => this.props.onChange()
    );
  }

  updateCalendar(calendar: Moment) {
    this.setState({ calendar });
  }

  checkBounds(datetime: Moment) {
    return (
      (!this.props.minDate || datetime > this.props.minDate) &&
      (!this.props.maxDate || datetime < this.props.maxDate)
    );
  }

  update(datetime: Moment) {
    if (this.state.calendar) {
      this.updateCalendar(datetime.clone());
    }

    if (this.checkBounds(datetime)) {
      this.setState({ datetime }, () => this.props.onChange(datetime));
    } else {
      this.setState({ warning: true }, () => {
        setTimeout(() => {
          this.setState({ warning: false });
        }, 250);
      });
    }
  }

  handleOnWheel(event: any, upCallback: () => void, downCallback: () => void) {
    event = event.originalEvent || event;
    let delta = event.wheelDelta || event.deltaY * -1 || 0;
    if (delta < 0) {
      this.props.naturalScroll ? upCallback() : downCallback();
    }
    if (delta > 0) {
      this.props.naturalScroll ? downCallback() : upCallback();
    }
  }

  closeEditPopover() {
    this.setState({ active: false }, this.props.onClose);
  }

  toggleEditPopover() {
    this.setState({
      active: !this.state.active,
      datetime: this.state.datetime || moment(),
    });
  }

  toggleCalendar() {
    if (this.state.calendar) {
      this.setState({
        calendar: null,
      });
    } else {
      this.setState({
        calendar: this.state.datetime ? this.state.datetime.clone() : moment(),
      });
    }
  }

  renderDate() {
    if (this.props.datetime) {
      return (
        <div className={styles.date}>
          {this.props.datetime.format(this.props.dateFormat)}
        </div>
      );
    } else {
      return <></>;
    }
  }

  renderTime() {
    if (this.props.datetime) {
      return (
        <div className={styles.time}>
          {this.props.datetime.format(this.props.timeFormat)}
        </div>
      );
    } else {
      return <></>;
    }
  }

  renderPlaceholder() {
    if (!this.props.datetime) {
      return <div className={styles.placeholder}>{this.props.placeholder}</div>;
    } else {
      return <></>;
    }
  }

  renderCalendarHeader() {
    return (
      <div
        className={styles.calendarHeader}
        onWheel={(event) =>
          this.handleOnWheel(
            event,
            () =>
              this.updateCalendar(
                this.state.calendar
                  ? this.state.calendar.add(1, 'month')
                  : moment()
              ),
            () =>
              this.updateCalendar(
                this.state.calendar
                  ? this.state.calendar.subtract(1, 'month')
                  : moment()
              )
          )
        }
      >
        <div
          className={`${styles.arrow} ${styles.arrowLeft}`}
          onClick={() =>
            this.updateCalendar(
              this.state.calendar
                ? this.state.calendar.subtract(1, 'month')
                : moment()
            )
          }
        ></div>
        <span>
          {this.state.calendar
            ? this.state.calendar.format('MMMM YYYY')
            : moment().format('MMMM YYYY')}
        </span>
        <div
          className={`${styles.arrow} ${styles.arrowRight}`}
          onClick={() =>
            this.updateCalendar(
              this.state.calendar
                ? this.state.calendar.add(1, 'month')
                : moment().add(1, 'month')
            )
          }
        ></div>
      </div>
    );
  }

  renderWeekdays() {
    return (
      <div className={styles.weekdays}>
        {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
          let date = this.state.calendar ? this.state.calendar.clone() : null;
          return (
            <span key={dayIndex} className={styles.weekday}>
              {date?.startOf('week').add(dayIndex, 'days').format('ddd')}
            </span>
          );
        })}
      </div>
    );
  }

  renderWeeks() {
    let weekNumberEnd =  this.state.calendar ?  this.state.calendar.clone().endOf('month').week() : null;
    let weekNumberStart = this.state.calendar ? this.state.calendar.clone().startOf('month').week() : null;
    let numWeeks = Math.abs(
      weekNumberEnd && weekNumberStart ? weekNumberEnd - weekNumberStart + 1 : 0
    );

    return [0, 1, 2, 3, 4, 5].slice(0, numWeeks).map((weekIndex) => {
      return (
        <div key={weekIndex} className={styles.week}>
          {[0, 1, 2, 3, 4, 5, 6].map((dayIndex) => {
            let date =  this.state.calendar
              ?.clone()
              .startOf('month')
              .add(weekIndex, 'weeks')
              .weekday(dayIndex)
              .startOf('day');

            let dateStyles = styles.date;
            if (date?.clone().isSame(this.current.clone().startOf('day'))) {
              dateStyles += ` ${styles.current}`;
            }
            if (
              date?.clone().isSame(this.state.datetime?.clone().startOf('day'))
            ) {
              dateStyles += ` ${styles.active}`;
            }
            if (date?.clone().month() !== (this.state.calendar ? this.state.calendar.month() : null)) {
              dateStyles += ` ${styles.inactive}`;
            }

            let dateFormat = date?.format('YYYY-MM-DD');
            let timeFormat = this.state.datetime?.format('HH:mm:ssZ');
            let datetime = moment(`${dateFormat}T${timeFormat}`);

            return (
              <span
                key={dayIndex}
                className={dateStyles}
                onClick={() => this.update(datetime)}
              >
                {date?.date()}
              </span>
            );
          })}
        </div>
      );
    });
  }

  renderCalendarBody() {
    return (
      <div className={styles.calendarBody}>
        {this.renderWeekdays()}
        {this.renderWeeks()}
      </div>
    );
  }

  renderCalendar() {
    // if ( !!this.state.calendar ) {
    return (
      <div className={styles.calendar}>
        {this.renderCalendarHeader()}
        {this.renderCalendarBody()}
      </div>
    );
    // }
  }

  renderHours() {
    return (
      <div
        className={styles.timerHours}
        onWheel={(event) =>
          this.handleOnWheel(
            event,
            () =>
              this.update(
                this.state.datetime
                  ? this.state.datetime.clone().add(1, 'hours')
                  : moment().add(1, 'hours')
              ),
            () =>
              this.update(
                this.state.datetime
                  ? this.state.datetime.clone().subtract(1, 'hours')
                  : moment().subtract(1, 'hours')
              )
          )
        }
      >
        <div
          className={`${styles.arrow} ${styles.arrowUp}`}
          onClick={() =>
            this.update(
              this.state.datetime
                ? this.state.datetime.clone().add(1, 'hours')
                : moment().add(1, 'hours')
            )
          }
        ></div>
        <span>{this.state.datetime?.format('HH')}</span>
        <div
          className={`${styles.arrow} ${styles.arrowDown}`}
          onClick={() =>
            this.update(
              this.state.datetime
                ? this.state.datetime.clone().subtract(1, 'hours')
                : moment().subtract(1, 'hours')
            )
          }
        ></div>
      </div>
    );
  }

  renderMinutes() {
    return (
      <div
        className={styles.timerMinutes}
        onWheel={(event) =>
          this.handleOnWheel(
            event,
            () =>
              this.update(
                this.state.datetime
                  ? this.state.datetime.clone().add(1, 'minutes')
                  : moment()
              ),
            () =>
              this.update(
                this.state.datetime
                  ? this.state.datetime.clone().subtract(1, 'minutes')
                  : moment()
              )
          )
        }
      >
        <div
          className={`${styles.arrow} ${styles.arrowUp}`}
          onClick={() =>
            this.update(
              this.state.datetime
                ? this.state.datetime.clone().add(1, 'minutes')
                : moment()
            )
          }
        ></div>
        <span>{this.state.datetime?.format('mm')}</span>
        <div
          className={`${styles.arrow} ${styles.arrowDown}`}
          onClick={() =>
            this.update(
              this.state.datetime
                ? this.state.datetime.clone().subtract(1, 'minutes')
                : moment()
            )
          }
        ></div>
      </div>
    );
  }

  renderSeconds() {
    return (
      <div
        className={styles.timerSeconds}
        onWheel={(event) =>
          this.handleOnWheel(
            event,
            () =>
              this.update(
                this.state.datetime
                  ? this.state.datetime.clone().add(1, 'seconds')
                  : moment()
              ),
            () =>
              this.update(
                this.state.datetime
                  ? this.state.datetime.clone().subtract(1, 'seconds')
                  : moment()
              )
          )
        }
      >
        <div
          className={`${styles.arrow} ${styles.arrowUp}`}
          onClick={() =>
            this.update(
              this.state.datetime
                ? this.state.datetime.clone().add(1, 'seconds')
                : moment()
            )
          }
        ></div>
        <span>{this.state.datetime?.format('ss')}</span>
        <div
          className={`${styles.arrow} ${styles.arrowDown}`}
          onClick={() =>
            this.update(
              this.state.datetime
                ? this.state.datetime.clone().subtract(1, 'seconds')
                : moment()
            )
          }
        ></div>
      </div>
    );
  }

  renderTimer() {
    return (
      <div className={styles.timer}>
        {this.renderHours()}
        <div className={styles.timerDivider}>:</div>
        {this.renderMinutes()}
        {/*<div className={styles.timerDivider}>:</div>*/}
        {/*{this.renderSeconds()}*/}
      </div>
    );
  }

  renderClearButton() {
    if (this.props.allowClear && !!this.state.datetime) {
      return (
        <div className={styles.clearButton}>
          <div onClick={this.clear.bind(this)}>Clear</div>
        </div>
      );
    } else {
      return <></>
    }
  }

  renderCloseButton() {
    return (
      <div className={styles.closeButton}>
        <div onClick={this.closeEditPopover.bind(this)}>Close</div>
      </div>
    );
  }

  renderDisplay() {
    if (this.props.customDisplay) {
      // @ts-ignore
      return React.cloneElement(this.props.customDisplay, {
        onClick: this.toggleEditPopover.bind(this),
        datetime: this.props.datetime,
        warning: this.state.warning,
        active: this.state.active,
      });
    } else {
      let displayClassNames = `${styles.display}
        ${this.state.active ? styles.active : ''}
        ${this.state.warning ? styles.warning : ''}
      `;
      return (
        <div
          className={displayClassNames}
          onClick={this.toggleEditPopover.bind(this)}
        >
          {this.renderDate()}
          {this.renderTime()}
          {this.renderPlaceholder()}
        </div>
      );
    }
  }
  setToday() {
    this.update(moment());
    // this.setState({ datetime: moment(), calendar: moment() });
  }
  renderTodayButton() {
    return (
      <div onClick={() => this.setToday()} className={styles.todayButtonWrap}>
        Сегодня
      </div>
    );
  }
  renderEditPopover() {
    // if ( this.state.active ) {
    return (
      <div className={styles.editPopover}>
        {/*<div className={styles.header}*/}
        {/*  // onClick={this.toggleCalendar.bind(this)}*/}
        {/*>*/}
        {/*  {this.state.datetime.format(this.props.dateFormat)}*/}
        {/*</div>*/}
        {this.renderTimer()}
        {/*{this.renderTodayButton()}*/}
        {/*{this.renderCalendar()}*/}
        {/*{this.renderClearButton()}*/}
        {/*{this.renderCloseButton()}*/}
      </div>
    );
    // }
  }

  render() {
    return (
      <div
        className={styles.datetimeInput}
        ref={(node) => {
          this.wrapper = node;
        }}
      >
        {/*{this.renderDisplay()}*/}
        {this.renderEditPopover()}
      </div>
    );
  }
}

/*TimeInputScroller.defaultProps = {
  datetime: undefined,
  dateFormat: 'DD MMMM YYYY',
  timeFormat: 'HH : mm : ss',
  placeholder: 'Set datetime',
  onChange: undefined,
  onClose: undefined,
  allowClear: false,
  customDisplay: undefined,
  minDate: undefined,
  maxDate: undefined,
  naturalScroll: true,
}*/

export default TimeInputScroller;
