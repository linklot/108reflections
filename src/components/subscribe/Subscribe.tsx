import * as React from 'react';
import * as css from './Subscribe.css';
import {IState, IProps} from './SubscribeInterface';
import {SubscribeService} from './SubscribeService';

const maxWidthStyle = {
    maxWidth: 1500
};

const maxHeightStyle = {
    maxHeight: 300
};

const fullWidthStyle = {
    width: '100%'
};

export default class Subscribe extends React.Component<IProps, IState> {
    state: IState;
    _name: any;
    _apartmentNumber: any;
    _email: any;
    subscribeService: SubscribeService;

    constructor(props: IProps) {
        super(props);
        this.state = {
            formValid: true,
            formSubmitted: false,
            msg: 'Thank you for subscribing! We will send you the latest updates soon.',
            invalidName: false,
            invalidApartmentNumber: false,
            invalidEmail: false,
            name: '',
            apartmentNumber: '',
            email: '',
            formInvalidMsg: 'Please check your input.'
        };
        this._name = '';
        this._apartmentNumber = '';
        this._email = '';
        this.subscribeService = new SubscribeService();
    }

    submitForm = (e: any) => {
        e.preventDefault();
        const _validForm = this.validateForm();
        if (_validForm) {
            this.state.name = this._name.value;
            this.state.email = this._email.value;
            this.state.apartmentNumber = this._apartmentNumber.value;
            this.subscribeService.submitSubscribe(this.state);
            this.state.formSubmitted = true;
            this.state.formValid = true;
        } else {
            this.state.formValid = false;
        }
    };

    validateForm = (): boolean => {
        let _valid = true;

        if (this._name.value.trim() === '') {
            this.setState({
                invalidName: true,
            });
            _valid = false;
        } else {
            this.setState({
                invalidName: false,
            });
        }

        if (this._apartmentNumber.value.trim() === '') {
            this.setState({
                invalidApartmentNumber: true,
            });
            _valid = false;
        } else {
            this.setState({
                invalidApartmentNumber: false,
            });
        }

        if (this._email.value.trim() === '') {
            this.setState({
                invalidEmail: true,
            });
            _valid = false;
        } else {
            this.setState({
                invalidEmail: false,
            });
        }

        return _valid;
    };

    public render() {
        return (
            <div>
                <header className="w3-display-container w3-content w3-wide" style={maxWidthStyle}>
                    <img className="w3-image" style={maxHeightStyle} src="./images/news_title.jpg" width={1500} height={300} alt="Architecture"></img>
                    <div className="w3-display-middle w3-margin-top w3-center">
                        <h1 className="w3-xxlarge w3-text-white">
                        <img className={css.iconImg} src="./images/icon.jpg"></img>
                        </h1>
                    </div>
                </header>

                <div className="w3-content w3-padding" style={maxWidthStyle}>
                    {/* News section */}
                    <div className="w3-container w3-padding-32">
                        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-small">
                            <i className="fas fa-bullhorn w3-text-teal"></i> Subscribe Updates
                        </h3>
                    </div>

                    <div className="w3-row-padding w3-padding-16 w3-border-bottom w3-border-light-grey">
                        <div className="w3-col l12 m12 s12 w3-margin-bottom">
                            <div className="w3-display-container">
                            Owners are now welcome to subscribe to updates provided by us about our 
                            performance and relevant building issues. Sign up below with your 
                            name, apartment number, and email address. Upon verification, you will be included in the next distribution!
                            </div>
                        </div>
                        <div className="w3-col l12 m12 s12 w3-margin-bottom">
                            <div className="w3-display-container">
                                <label className={css.formLable}>Your name <span className={css.required}>*</span></label>
                                <input className={`w3-input ${this.state.invalidName ? 'w3-border-red' : ''}`} type="text" ref={(e) => this._name = e}/>
                            </div>
                        </div>
                        <div className="w3-col l12 m12 s12 w3-margin-bottom">
                            <div className="w3-display-container">
                                <label className={css.formLable}>Apartment number <span className={css.required}>*</span></label>
                                <input className={`w3-input ${this.state.invalidApartmentNumber ? 'w3-border-red' : ''}`} type="text" ref={(e) => this._apartmentNumber = e}/>
                            </div>
                        </div>
                        <div className="w3-col l12 m12 s12 w3-margin-bottom">
                            <div className="w3-display-container">
                                <label className={css.formLable}>Email <span className={css.required}>*</span></label>
                                <input className={`w3-input ${this.state.invalidEmail ? 'w3-border-red' : ''}`} type="text" ref={(e) => this._email = e}/>
                            </div>
                        </div>
                        <div className="w3-col l2 m2 s2 w3-margin-bottom">
                            <button className="w3-btn w3-teal w3-round-large"
                                onClick={this.submitForm} disabled={this.state.formSubmitted}>
                                Submit <i className="fas fa-check"></i>
                            </button>
                        </div>
                        <div className={`w3-col l10 m10 s10 w3-margin-bottom ${this.state.formValid ? css.hideMsg : css.showMsg}`}>
                            <div className="w3-display-container w3-text-deep-orange">
                                {this.state.formInvalidMsg}
                            </div>
                        </div>
                        <div className={`w3-col l10 m10 s10 w3-margin-bottom ${this.state.formSubmitted ? css.showMsg : css.hideMsg}`}>
                            <div className="w3-display-container w3-text-green">
                                {this.state.msg}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
    