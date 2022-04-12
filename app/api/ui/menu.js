
const menuData = [
  {
    key: 'dashboard',
    name: 'Dashboard',
    linkParent: '/dashboard',
    icon: 'ion-ios-stats',
  },
  {
    key: 'Report',
    name: 'Report',
    icon: 'ion-ios-pie-outline',
    child: [
      {
        key: 'landlord',
        name: 'Landlord',
        link: '/report/landlord',
        icon: 'ion-ios-pie-outline',
      },
      {
        key: 'vp',
        name: 'Vice President',
        link: '/report/vice-president'
      },
      {
        key: 'rm',
        name: 'Regional Manager',
        link: '/report/regional-manager'
      },
      {
        key: 'pm',
        name: 'Property Manager',
        link: '/report/property-manager'
      },
    ]
  },
  {
    key: 'property',
    name: 'Property',
    icon: 'ion-ios-home-outline',
    child: [
      {
        key: 'buildings',
        name: 'Buildings',
        link: '/property/buildings'
      },
      {
        key: 'applications',
        name: 'Applications',
        link: '/property/applications'
      },
      {
        key: 'policies',
        name: 'Policies',
        link: '/property/policies'

      },
      {
        key: 'claims',
        name: 'Claims',
        link: '/property/claims'

      },
    ]
  },
  {
    key: 'user',
    name: 'User',
    icon: 'ion-ios-people-outline',
    child: [
      {
        key: 'll',
        name: 'Landlord',
        link: '/user/landlord'
      },
      {
        key: 'vp',
        name: 'Vice President',
        link: '/user/vicep-resident'
      },
      {
        key: 'rm',
        name: 'Regional Manager',
        link: '/user/regional-manager'
      },
      {
        key: 'pm',
        name: 'Property Manager',
        link: '/user/property-manager'
      }
    ]
  }
];

export default menuData;
