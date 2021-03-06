import Ember from 'ember';
import moment from 'moment';
import { FORM_DATE_FORMAT, FORM_TIME_FORMAT } from 'open-event-frontend/utils/dictionary';

const { Mixin, MutableArray } = Ember;

export default Mixin.create(MutableArray, {

  getBasicDetails() {
    return {
      id                   : null,
      name                 : '',
      locationName         : '',
      latitude             : 0.0,
      longitude            : 0.0,
      showMap              : true,
      startDate            : moment().add(1, 'months').format(FORM_DATE_FORMAT),
      startTime            : moment().add(1, 'months').hour(10).minute(0).format(FORM_TIME_FORMAT),
      endDate              : moment().add(1, 'months').format(FORM_DATE_FORMAT),
      endTime              : moment().add(1, 'months').hour(17).minute(0).format(FORM_TIME_FORMAT),
      timezone             : moment.tz.guess(),
      description          : '',
      backgroundUrl        : '',
      logoUrl              : '',
      hasOrganizerInfo     : true,
      organizerName        : '',
      organizerDescription : '',
      externalEventUrl     : this.store.createRecord('social-link', { name: 'External Link' }),
      socialLinks          : [
        this.store.createRecord('social-link', { name: 'Facebook', link: 'https://facebook.com/' }),
        this.store.createRecord('social-link', { name: 'Twitter', link: 'https://twitter.com/' })
      ],
      ticketingSystemEnabled : true,
      tickets                : [],
      externalTicketUrl      : '',
      discountCodeId         : null,
      discountCode           : '',
      paymentCountry         : 'United States',
      paymentCurrency        : 'USD',
      payByPayPal            : false,
      payByStripe            : false,
      payByCheque            : false,
      payByBank              : false,
      payOnSite              : false,
      privacy                : 'public',
      type                   : '',
      topic                  : '',
      subTopic               : '',
      state                  : 'Draft',
      hasCodeOfConduct       : false,
      codeOfConduct          : '',
      copyright              : '',
      hasTaxInfo             : false,
      taxInfo                : this.store.createRecord('tax-info'),
      stripe                 : this.store.createRecord('stripe')
    };
  },

  getSponsors() {
    return {
      enabled  : false,
      sponsors : []
    };
  },

  getSessionSpeakers() {
    return {
      enabled           : [],
      tracks            : [],
      sessionTypes      : [],
      microlocations    : [],
      call_for_speakers : this.store.createRecord('call-for-speakers')
    };
  }

});
