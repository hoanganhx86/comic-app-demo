import {StyleSheet} from 'react-native';

export const sharedStyles = StyleSheet.create({
  absolute: {position: 'absolute'},
  absoluteFill: StyleSheet.absoluteFillObject,
  relative: {position: 'relative'},
  flex: {flex: 1},
  flexGrow: {flexGrow: 1},
  flexNoGrow: {flexGrow: 0},
  flexWrap: {flexWrap: 'wrap'},
  flexNoWrap: {flexWrap: 'nowrap'},
  horizontal: {flexDirection: 'row'},
  horizontalReverse: {flexDirection: 'row-reverse'},
  vertical: {flexDirection: 'column'},
  verticalReverse: {flexDirection: 'column-reverse'},
  alignItemsCenter: {alignItems: 'center'},
  alignItemsFlexEnd: {alignItems: 'flex-end'},
  alignItemsFlexStart: {alignItems: 'flex-start'},
  alignSelfCenter: {alignSelf: 'center'},
  alignSelfFlexEnd: {alignSelf: 'flex-end'},
  alignSelfFlexStart: {alignSelf: 'flex-start'},
  alignSelfStretch: {alignSelf: 'stretch'},
  displayFlex: {display: 'flex'},
  displayNone: {display: 'none'},
  fullHeight: {height: '100%'},
  fullMinWidth: {minWidth: '100%'},
  fullMaxWidth: {maxWidth: '100%'},
  fullWidth: {width: '100%'},
  justifyContentCenter: {justifyContent: 'center'},
  justifyContentFlexEnd: {justifyContent: 'flex-end'},
  justifyContentFlexStart: {justifyContent: 'flex-start'},
  justifyContentSpaceBetween: {justifyContent: 'space-between'},
  justifyContentSpaceEvenly: {justifyContent: 'space-evenly'},
  opacity0: {opacity: 0},
  opacity100: {opacity: 1},
  overflowHidden: {overflow: 'hidden'},
  textCenter: {textAlign: 'center'},
  center: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
