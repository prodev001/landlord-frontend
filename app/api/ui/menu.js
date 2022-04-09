
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
        link: '/dashboard/report/landlord',
        icon: 'ion-ios-pie-outline',
      },
      {
        key: 'vp',
        name: 'Vice President',
        link: '/dashboard/report/vice-president'
      },
      {
        key: 'rm',
        name: 'Regional Manager',
        link: '/dashboard/report/regional-manager'
      },
      {
        key: 'pm',
        name: 'Property Manager',
        link: '/dashboard/report/property-manager'
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
        link: '/dashboard/property/buildings'
      },
      {
        key: 'applications',
        name: 'Applications',
        link: '/dashboard/property/applications'
      },
      {
        key: 'policies',
        name: 'Policies',
        link: '/dashboard/property/policies'

      },
      {
        key: 'claims',
        name: 'Claims',
        link: '/dashboard/property/claims'

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
        link: '/dashboard/user/landlord'
      },
      {
        key: 'vp',
        name: 'Vice President',
        link: '/dashboard/user/vicep-resident'
      },
      {
        key: 'rm',
        name: 'Regional Manager',
        link: '/dashboard/user/regional-manager'
      },
      {
        key: 'pm',
        name: 'Property Manager',
        link: '/dashboard/user/property-manager'
      }
    ]
  }
];

export default menuData;
