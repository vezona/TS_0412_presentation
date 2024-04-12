interface IdentityInfo {
    id: string | null;
    sid: number | null;
    groupId: string | null;
    webCaseGroupingSID: number | null;
  }
  
  interface BaseInfo {
    caseName: string | null;
    purPoseName: string | null;
    caseType: string | null;
    city: string | null;
    district: string | null;
    road: string | null;
    sectionType: number | null;
    alley: string | null;
    lane: string | null;
    no: string | null;
    noHyphen: string | null;
    floor: string | null;
    publicRatio: number | null;
    hasParkingLot: boolean | null;
    parkingLotType: string | null;
    fromFloor: number | null;
    toFloor: number | null;
    totalFloor: number | null;
    rm: number | null;
    livingRm: number | null;
    bathRm: number | null;
    balcony: number | null;
    isIncludeRoofAddition: boolean | null;
    isOpenConcept: boolean | null;
    buildAge: number | null;
    totalPrice: number | null;
    unitPrice: number | null;
    parkingLotPrice: number | null;
    isHasElevator: boolean | null;
    managementType: string | null;
    managementFee: number | null;
    isContainParkingLotManagementFee: boolean | null;
    parkingLotManagementFee: number | null;
    facing: string | null;
    isPreSoldHouse: boolean | null;
    description: string | null;
    sourceWebCaseIdx: number | null;
    landNo: string | null;
    caseFromName: string | null;
    buildFinishYear: number | null;
    buildFinishMonth: number | null;
    lat: number | null;
    lng: number | null;
  }
  
  interface ContactInfo {
    contactName: string | null;
    contactPhone: string | null;
  }
  
  interface VideoInfo {
    youTubeUrl: string | null;
    vrUrl: string | null;
  }
  
  interface AreaInfo {
    buildPin: number | null;
    buildSquareMetre: number | null;
    mainPin: number | null;
    mainSquareMetre: number | null;
    attachedPin: number | null;
    attachedSquareMetre: number | null;
    publicPin: number | null;
    publicSquareMetre: number | null;
    parkingLotPin: number | null;
    parkingLotSquareMetre: number | null;
    landPin: number | null;
    landSquareMetre: number | null;
    otherPin: number | null;
    otherSquareMetre: number | null;
  }
  
  interface PictureInfo {
    casePhotoList: string[];
    patternPictureList: string[];
  }
  
  interface CommunityInfo {
    communityName: string | null;
    communityGroupId: string | null;
    isCommunity: boolean | null;
  }
  
  export type PublishState = 'Inventory' | 'Public' | 'NonPublicise' | 'Close' | 'Track' | null;
  
  interface PublishStateInfo {
    state: PublishState;
    stateReason: string[];
    publishDateTime: string;
    publishFinishDateTime: string;
  }

interface InventoryWebCaseData {
    baseInfo: BaseInfo;
    contactInfo: ContactInfo;
    videoInfo: VideoInfo;
    areaInfo: AreaInfo;
    pictureInfo: PictureInfo;
    communityInfo: CommunityInfo;
    identityInfo: IdentityInfo;
    publishStateInfo: PublishStateInfo;
    isExpired: boolean;
  }

export const webCase :InventoryWebCaseData = {
    identityInfo: {
      id: null,
      sid: null,
      groupId: null,
      webCaseGroupingSID: null,
    },
    baseInfo: {
      purPoseName: '',
      caseType: '',
      caseName: '',
      city: '',
      district: '',
      road: '',
      alley: null,
      lane: null,
      no: null,
      noHyphen: null,
      floor: null,
      publicRatio: null,
      hasParkingLot: null,
      parkingLotType: '',
      fromFloor: null,
      toFloor: null,
      totalFloor: null,
      rm: null,
      livingRm: null,
      bathRm: null,
      balcony: null,
      isIncludeRoofAddition: null,
      isOpenConcept: null,
      buildAge: null,
      buildFinishYear: null, // 建築完工日(年)
      buildFinishMonth: null, // 建築完工日(月)
      totalPrice: null,
      unitPrice: null,
      parkingLotPrice: null,
      isHasElevator: null,
      managementType: null,
      managementFee: null,
      isContainParkingLotManagementFee: null,
      parkingLotManagementFee: null,
      facing: null,
      isPreSoldHouse: null,
      description: null,
      sectionType: null,
      sourceWebCaseIdx: null,
      landNo: null,
      caseFromName: null,
      lat: null,
      lng: null,
    },
    contactInfo: {
      contactName: '',
      contactPhone: '',
    },
    videoInfo: {
      youTubeUrl: null,
      vrUrl: null,
    },
    areaInfo: {
      buildPin: null,
      buildSquareMetre: null,
      mainPin: null,
      mainSquareMetre: null,
      attachedPin: null,
      attachedSquareMetre: null,
      publicPin: null,
      publicSquareMetre: null,
      parkingLotPin: null,
      parkingLotSquareMetre: null,
      landPin: null,
      landSquareMetre: null,
      otherPin: null,
      otherSquareMetre: null,
    },
    pictureInfo: {
      casePhotoList: [],
      patternPictureList: [],
    },
    communityInfo: {
      communityName: null,
      communityGroupId: null,
      isCommunity: null,
    },
    publishStateInfo: {
      state: null, // Public、NonPublicise、Close
      stateReason: [],
      publishDateTime: '',
      publishFinishDateTime: '',
    },
    isExpired: true, // 是否超過刊登走期，預設為過期
  };