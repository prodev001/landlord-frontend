import { fromJS, Map } from 'immutable';
import types from '../constants/authConstants';

const INITIAL_STATE = {
  building: {
    NAME: 'Yugo Minneapolis East Bank - Edge on Oak',
    BUILDING_TYPE: 'Event Process',
    PHONE: '612-843-2222',
    BILLINGSTREET: '313 Oak Street SE',
    PRIMARY_CONTACT: 'Edge on Oak',
    EMAIL_ADDRESS: 'minneapoliseastbank@yugo.com',
    STUDENT_HOUSING: 'TRUE',
    LANDLORD__NAME: 'Yugo',
    PRIMARY_CONTACT__EMAIL: 'minneapoliseastbank@yugo.com',
    PROPERTY_OWNER: 'Edge on Oak - UCAL, LLC',
    TOTAL_OF_UNITS: 95,
    TOTAL_OF_ACTIVE_LEAP_UNITS: 1,
    LEAP_OF_TOTAL_INVENTORY: 1.05,
    ESTIMATED_APPLICANT_DECLINE_RATE: 20,
    BUILDING_APPROVAL_RATE: 50,
    TOTAL_OF_ISSUED_POLICIES: 1,
    TOTAL_OF_APPLICATIONS: 17,
    TOTAL_OF_CANCELLED_APPLICATIONS: 11,
    TOTAL_OF_DECLINED_APPLICATIONS: 3,
    LAST_APPLICATION_DATE: '24-02-22',
    BUILDING_APPROVED_TO_ISSUE_RATE: '33.33',
    CANCELLATION_PERCENTAGE: '64.71',
    TOTAL_OF_DECISIONED_APPLICATIONS: 6,
    TOTAL_OF_APPROVED_APPLICATIONS: 3,
    DECLINE_PERCENTAGE: 17.65,
    BILLINGSTATE: 'MN',
    BILLINGCITY: 'Minneapolis'
  },
  application: {
    STAGE: '00 - Entrata',
    RIDER_ID: 'LEAP-0906433',
    NAME: 'Tinari - 4500 College Avenue',
    INSURER: 'Accelerant',
    TOTAL_NUMBER_OF_TENANTS: 1,
    ACTIVE_LEASE: 'FALSE',
    MONTHS_REMAINING: 12,
    APPLICATION_TYPE: 'Rent Guaranty',
    GROSS_MONTHLY_RENT: 1259,
    GROSS_ANNUAL_RENT: 15108,
    LEASE_START_DATE: '20-08-22',
    LEASE_END_DATE: '31-07-23',
    DECLINE_REASON_1: '',
    CANCELLATION_REASON: '',
    LANDLORD_ACCOUNT_NAME: 'The Cardinal Group',
    APARTMENT_BUILDING__NAME: 'Landmark',
    ISSUE_DATE: '21-02-22',
    COVERAGEAMOUNTREQUESTED1: 8813,
    COVERAGE_AMOUNT_REQUESTED_MONTHS: 12,
    LDR_COVERAGE: '',
    DAMAGES_PREMIUM: 0,
    TOTAL_COVERAGE_AMOUNT: 8813,
    TENANT_1__NAME: 'Jack Emmett Tinari',
    TENANT_1_FEE_INPUT: 1605,
    TENANT_1_PORTION_OF_FEES: 0,
    TOTAL_OF_UNITS: 829,
    LEAP_OF_TOTAL_INVENTORY: 1.92,
    TOTAL_OF_ACTIVE_LEAP_UNITS: 15,
    ESTIMATED_APPLICANT_DECLINE_RATE: 3.5,
  },
  error: null,
};

const initialImmutableState = fromJS(INITIAL_STATE);

const propertyReducer = (state = initialImmutableState, action = {}) => {
  switch (action.type) {
    case types.LOG_IN_SUCCESS:
      return state.withMutations((mutableState) => {
        mutableState.set('currentUser', fromJS(action.payload));
        mutableState.set('error', Map());
      });
    case types.LOG_IN_FAILURE:
    case types.REGISTER_FAILURE:
      return state.withMutations((mutableState) => {
        mutableState.set('currentUser', null);
        mutableState.set('error', fromJS(action.payload.data));
      });
    case types.LOG_OUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default propertyReducer;
