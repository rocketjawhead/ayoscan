import React from 'react';
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Entypo from 'react-native-vector-icons/Entypo'

import HomeContainer from './App/containers/HomeContainer'
import SplashScreenContainer from './App/containers/SplashScreenContainer'
import IntroContainer from './App/containers/IntroContainer'
import LoginContainer from './App/containers/LoginContainer'
import ExpansesContainer from './App/containers/ExpansesContainer';
import WalletContainer from './App/containers/WalletContainer';
import ProfileContainer from './App/containers/ProfileContainer';
import RegisterContainer from './App/containers/RegisterContainer';
import AddButton from './App/containers/AddButton';
import IncomeContainer from './App/containers/IncomeContainer';
import OutcomeContainer from './App/containers/OutcomeContainer';
import InstallmentContainer from './App/containers/InstallmentContainer';

//newfunction
import HistoryContainer from './App/containers/HistoryContainer';
import DetailTransactionContainer from './App/containers/DetailTransactionContainer';
import NewsContainer from './App/containers/NewsContainer';
import DetailBlogContainer from './App/containers/DetailBlogContainer';
import DetailPromoContainer from './App/containers/DetailPromoContainer';
import ForgetPasswordContainer from './App/containers/ForgetPasswordContainer';
import ValidationOtpContainer from './App/containers/ValidationOtpContainer';
import ResetPasswordContainer from './App/containers/ResetPasswordContainer';
import ProfileSettingContainer from './App/containers/ProfileSettingContainer'
import BookmarkContainer from './App/containers/BookmarkContainer'
import ChangePasswordContainer from './App/containers/ChangePasswordContainer'
import StatisticMoneyContainer from './App/containers/StatisticMoneyContainer'
import AboutContainer from './App/containers/AboutContainer'
import RegisterPinContainer from './App/containers/RegisterPinContainer'
import PinContainer from './App/containers/PinContainer'
import ForgetPinContainer from './App/containers/ForgetPinContainer'
import ValidationOtpPinContainer from './App/containers/ValidationOtpPinContainer'
import ResetPinContainer from './App/containers/ResetPinContainer'
import ValidationOtpRegisterContainer from './App/containers/ValidationOtpRegisterContainer'
import TncRegisterContainer from './App/containers/TncRegisterContainer'
import CashContainer from './App/containers/CashContainer'
import AddWalletContainer from './App/containers/AddWalletContainer'
import AddTransactionContainer from './App/containers/AddTransactionContainer'
import EditWalletContainer from './App/containers/EditWalletContainer'
import AddCategoryContainer from './App/containers/AddCategoryContainer'
import TransferContainer from './App/containers/TransferContainer'
import AddRekeningContainer from './App/containers/AddRekeningContainer'
import DetailTransferContainer from './App/containers/DetailTransferContainer'
import CicilanContainer from './App/containers/CicilanContainer'
import AddCicilanContainer from './App/containers/AddCicilanContainer'
import DetailCicilanContainer from './App/containers/DetailCicilanContainer'
import AnalisaContainer from './App/containers/AnalisaContainer'
import AddBudgetContainer from './App/containers/AddBudgetContainer'
import DetailBudgetContainer from './App/containers/DetailBudgetContainer'
import PromoContainer from './App/containers/PromoContainer'
import DetailTrxMonthContainer from './App/containers/DetailTrxMonthContainer'
import PremiumContainer from './App/containers/PremiumContainer'
import UpgradeContainer from './App/containers/UpgradeContainer'
import CategoryContainer from './App/containers/CategoryContainer'
import DetailCategoryContainer from './App/containers/DetailCategoryContainer'
import CicilanAllContainer from './App/containers/CicilanAllContainer'
import DetailCicilanAllContainer from './App/containers/DetailCicilanAllContainer'
import PoinContainer from './App/containers/PoinContainer'
import RedeemPoinContainer from './App/containers/RedeemPoinContainer'
import MessageContainer from './App/containers/MessageContainer'
import DetailMessageContainer from './App/containers/DetailMessageContainer'
import ChangePINContainer from './App/containers/ChangePINContainer'
import RekeningContainer from './App/containers/RekeningContainer'
import DetailRekeningContainer from './App/containers/DetailRekeningContainer'
import ChooseTransferContainer from './App/containers/ChooseTransferContainer'
import TransferWalletContainer from './App/containers/TransferWalletContainer'
//end new function
// const TabNavigator = createBottomTabNavigator(
//   {
//     HomeContainer: { 
//       screen: HomeContainer,
//       navigationOptions: () => ({
//         tabBarIcon: ({tintColor}) => (
//             <FontAwesome
//                 name="bank"
//                 color={tintColor}
//                 size={24}
//             />
//         )
//       })
//     },
//     ExpansesContainer: { 
//       screen: ExpansesContainer,
//       navigationOptions: () => ({
//         tabBarIcon: ({tintColor}) => (
//             <FontAwesome
//                 name="bar-chart"
//                 color={tintColor}
//                 size={24}
//             />
//         )
//       })
//     },
//     AddButton: {
//       screen: AddTransactionContainer, // Empty screen
//       navigationOptions: ({ navigation }) => ({
//           tabBarIcon: <AddButton 
//             navigation={navigation}
//           /> 
//           // Plus button component
//       })
//     },
//     NewsContainer: { 
//       screen: NewsContainer,
//       navigationOptions: () => ({
//         tabBarIcon: ({tintColor}) => (
//             <Entypo
//                 name="wallet"
//                 color={tintColor}
//                 size={24}
//             />
//         )
//       })
//     },
//     ProfileContainer: { 
//       screen: ProfileContainer,
//       navigationOptions: () => ({
//         tabBarIcon: ({tintColor}) => (
//             <Entypo
//                 name="user"
//                 color={tintColor}
//                 size={24}
//             />
//         )
//       })
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: '#3827B4',
//       inactiveTintColor: '#77869E',
//       showLabel:false,
//       style: {
//         backgroundColor: '#fff' // TabBar background
//       }
//     },
//   }
// )
const TabNavigator = createBottomTabNavigator(
  {
    HomeContainer: { 
      screen: HomeContainer,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <FontAwesome
                name="home"
                color={tintColor}
                size={24}
            />
        )
      })
    },
    AnalisaContainer: { 
      screen: HistoryContainer,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Entypo
                name="text-document"
                color={tintColor}
                size={24}
            />
        )
      })
    },
    // WalletContainer: { 
    //   screen: WalletContainer,
    //   navigationOptions: () => ({
    //     tabBarIcon: ({tintColor}) => (
    //         <Entypo
    //             name="rocket"
    //             color={tintColor}
    //             size={24}
    //         />
    //     )
    //   })
    // },
    NewsContainer: { 
      screen: NewsContainer,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Entypo
                name="cake"
                color={tintColor}
                size={24}
            />
        )
      })
    },
    ProfileContainer: { 
      screen: ProfileContainer,
      navigationOptions: () => ({
        tabBarIcon: ({tintColor}) => (
            <Entypo
                name="user"
                color={tintColor}
                size={24}
            />
        )
      })
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#13a699',
      inactiveTintColor: '#77869E',
      showLabel:false,
      style: {
        backgroundColor: '#fff' // TabBar background
      }
    },
  }
)

const MainNavigator = createStackNavigator(
  {
    SplashScreenContainer: { screen: SplashScreenContainer },
    LoginContainer: { screen: LoginContainer },
    TabNavigator: { screen: TabNavigator },
    IntroContainer: { screen: IntroContainer },
    ProfileContainer: { screen: ProfileContainer },
    RegisterContainer: { screen: RegisterContainer },
    IncomeContainer: { screen: IncomeContainer },
    OutcomeContainer:{ screen: OutcomeContainer },
    InstallmentContainer: { screen: InstallmentContainer },
    HistoryContainer: { screen: HistoryContainer },
    DetailTransactionContainer : { screen : DetailTransactionContainer},
    NewsContainer : { screen : NewsContainer},
    DetailBlogContainer : { screen : DetailBlogContainer},
    DetailPromoContainer : { screen : DetailPromoContainer },
    ForgetPasswordContainer : { screen : ForgetPasswordContainer},
    ValidationOtpContainer : { screen : ValidationOtpContainer },
    ResetPasswordContainer : { screen : ResetPasswordContainer},
    ProfileSettingContainer : { screen : ProfileSettingContainer },
    BookmarkContainer: { screen : BookmarkContainer },
    ChangePasswordContainer: { screen : ChangePasswordContainer },
    StatisticMoneyContainer : { screen : StatisticMoneyContainer },
    AboutContainer : { screen : AboutContainer },
    RegisterPinContainer : { screen : RegisterPinContainer},
    PinContainer : { screen : PinContainer },
    ForgetPinContainer : { screen : ForgetPinContainer},
    ValidationOtpPinContainer : { screen : ValidationOtpPinContainer},
    ResetPinContainer : { screen : ResetPinContainer },
    ValidationOtpRegisterContainer : { screen : ValidationOtpRegisterContainer },
    TncRegisterContainer : { screen : TncRegisterContainer },
    CashContainer : { screen : CashContainer},
    AddWalletContainer : { screen : AddWalletContainer },
    AddTransactionContainer : { screen : AddTransactionContainer},
    EditWalletContainer : { screen : EditWalletContainer },
    AddCategoryContainer : { screen : AddCategoryContainer },
    TransferContainer : { screen : TransferContainer },
    AddRekeningContainer : { screen : AddRekeningContainer },
    DetailTransferContainer : { screen : DetailTransferContainer},
    CicilanContainer : { screen : CicilanContainer},
    AddCicilanContainer : { screen : AddCicilanContainer},
    DetailCicilanContainer : { screen : DetailCicilanContainer},
    AnalisaContainer : { screen : AnalisaContainer },
    AddBudgetContainer : { screen : AddBudgetContainer},
    DetailBudgetContainer : { screen : DetailBudgetContainer},
    PromoContainer :{screen : PromoContainer},
    DetailTrxMonthContainer : { screen : DetailTrxMonthContainer},
    PremiumContainer : { screen : PremiumContainer},
    UpgradeContainer : { screen : UpgradeContainer},
    CategoryContainer :{ screen: CategoryContainer},
    DetailCategoryContainer : { screen : DetailCategoryContainer},
    CicilanAllContainer: { screen : CicilanAllContainer},
    DetailCicilanAllContainer : { screen : DetailCicilanAllContainer },
    PoinContainer : { screen : PoinContainer },
    RedeemPoinContainer : { screen : RedeemPoinContainer },
    MessageContainer : { screen : MessageContainer},
    DetailMessageContainer: { screen : DetailMessageContainer },
    ChangePINContainer : { screen :ChangePINContainer},
    RekeningContainer : { screen : RekeningContainer},
    DetailRekeningContainer : { screen : DetailRekeningContainer},
    ChooseTransferContainer : { screen : ChooseTransferContainer},
    TransferWalletContainer : { screen : TransferWalletContainer}
  },
  {
    initialRouteName:'SplashScreenContainer',
    headerMode:'none'
  }
)

const AppNavigator = createAppContainer(MainNavigator)

export default AppNavigator