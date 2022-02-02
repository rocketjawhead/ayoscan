import React from 'react'

import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image, TextInput, ScrollView,ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { widthPercentageToDP, heightPercentageToDP } from 'react-native-responsive-screen'

import fbIcon from '../assets/images/facebook.png'
import googleIcon from '../assets/images/google.png'
import Loading from '../modals/Loading' 
import DatePicker from 'react-native-datepicker'
import OpenEye from '../assets/images/view-eye.png'
import CloseEye from '../assets/images/hide-eye.png'
import footer_background from '../assets/images/footer_background.png'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Register = props => (
  <SafeAreaView style={{backgroundColor:'#F8F9F9', flex:1}}>
    { props.modalLoading == true ? <Loading /> : <View /> }
    <ScrollView>
      <View style={ styles.container }>
        <View>
          <TouchableOpacity onPress={ props.toLogin }>
            <Icon name="arrowleft" style={ styles.iconBack } onPress={props.goBack}/>
          </TouchableOpacity>
          <Text style={ styles.txtGreating }>Syarat & Ketentuan</Text>
        </View>

        <ScrollView style={{height:hp('70%'), padding:5, borderWidth:1, 
        borderColor:'#b2b2b2', margin:2}}>
            <View style={{}}>
              <Text></Text>
              <Text style={{textAlign:'center',justifyContent:'center',fontWeight:'bold'}}>Syarat dan Ketentuan Nobu ePay</Text>
              <Text>Terima Kasih Anda telah mengunduh Aplikasi Nobu ePay. Aplikasi Nobu ePay adalah layanan aplikasi sebagaimana dimaksud di dalam Syarat dan Ketentuan ini. Pada saat anda mengunduh Aplikasi, Anda mengakui dan menyetujui bahwa Anda telah membaca dengan teliti, memahami, menerima dan menyetujui seluruh Syarat dan Ketentuan yang merupakan perjanjian antara Anda dengan PT Bank Nationalnobu Tbk (selanjutnya disebut “Nobu Bank”).</Text>
              <Text></Text>
              <Text style={{fontWeight:'bold'}}>MOHON ANDA MEMERIKSA SYARAT DAN KETENTUAN KAMI DENGAN SEKSAMA SEBELUM MENGUNDUH APLIKASI ATAU MENGGUNAKAN LAYANAN UNTUK PERTAMA KALI.</Text>
              <Text></Text>
              <Text>Sebagaimana dijelaskan diatas, Layanan yang tersedia di Aplikasi Nobu ePay untuk anda sangat beragam, sehingga kami dapat mencantumkan atau memberlakukan syarat dan ketentuan tambahan untuk keperluan layanan tertentu, dimana persyaratan tambahan tersebut merupakan bagian dari Layanan dan akan tunduk dan terikat dengan Syarat dan Ketentuan ini.</Text>
              <Text>Kami berhak untuk setiap waktu mengubah, menambah, mengurangi, mengganti, menyesuaikan, dan/atau memodifikasi Syarat dan Ketentuan (baik sebagian ataupun seluruhnya). Setiap perubahan, penambahan, pengurangan, penggantian, penyesuaian dan/atau modifikasi yang dibuat dari waktu ke waktu atas Syarat dan Ketentuan, akan kami sampaikan melalui aplikasi ini.</Text>
              <Text>Untuk itu Anda diwajibkan untuk dari waktu ke waktu membaca Syarat dan Ketentuan yang kami sediakan melalui Aplikasi ini.</Text>
              <Text>Syarat dan Ketentuan ini berlaku terhadap Anda maupun atas transaksi atau atas penggunaan Layanan oleh atau melalui Akun Anda dimanapun Anda berada, baik di wilayah Republik Indonesia maupun di wilayah Negara lainnya.</Text>
              <Text></Text>
              <Text>I. Definisi</Text>
              <Text>1. <Text>Nobu ePay</Text> adalah uang elektronik berbasis server sebagai pengganti uang tunai yang dapat diisi ulang, digunakan untuk transaksi pembayaran di seluruh merchant yang telah bekerjasama dengan Nobu Bank.</Text>
              <Text></Text>
              <Text>2. <Text>Pengguna Nobu ePay</Text> adalah Nasabah dan Non Nasabah yang telah mengunduh aplikasi Nobu ePay pada smartphone dan melakukan registrasi, pembelian dan menyimpan dananya pada aplikasi Nobu ePay.</Text>
              <Text></Text>
              <Text>3. <Text>Kami</Text> adalah PT.Bank Nationalnobu Tbk (Nobu Bank).</Text>
              <Text></Text>
              <Text>4. Akun adalah data tentang Anda yang telah mendaftarkan diri pada aplikasi Nobu ePay yang dapat digunakan untuk mengakses, menggunakan dan/atau menikmati layanan serta untuk mencatat, memonitor dan/atau melihat seluruh transaksi dan/atau aktivitas yang Anda lakukan melalui Aplikasi termasuk jumlah Saldo Anda.</Text>
              <Text></Text>
              <Text>5. Saldo Maksimum adalah untuk Akun Unregistered saldo maksimum sebesar Rp 2.000.000,- dan Akun Registered saldo maksimum sebesar Rp 10.000.000,-.</Text>
              <Text></Text>
              <Text>6. Batas Nilai Transaksi adalah untuk jenis akun unregistered dan registered dalam 1 (satu) bulan masing-masing paling banyak Rp.20.000.000,-(Dua Puluh Juta Rupiah) diperhitungkan dari transaksi yang bersifat incoming, antara lain setoran awal, transfer dana masuk, pengisian ulang (top up), dan/atau transaksi lainnya.</Text>
              <Text></Text>
              <Text>7. Fitur Nobu ePay antara lain adalah melakukan pembayaran menggunakan QR code, Transaksi Isi Ulang (Top Up), pembelian pulsa dan transaksi lainnya yang ditentukan oleh Nobu Bank.</Text>
              <Text></Text>
              <Text>8. Transaksi pembayaran (Purchase) adalah proses pengurangan saldo pada aplikasi Nobu ePay pada saat membayar transaksi belanja yang dilakukan di penyedia barang atau jasa (Merchant), dengan cara melakukan pemindaian terhadap QR code yang terdapat pada kasir Merchant lalu secara otomatis mengurangi saldo yang tersimpan pada aplikasi pengguna Nobu ePay.</Text>
              <Text></Text>
              <Text>9. Transaksi isi ulang (Top Up) adalah transaksi pengisian dana ke dalam akun pengguna Nobu ePay.</Text>
              <Text></Text>
              <Text>10. PIN adalah 6 digit angka yang digunakan untuk masuk ke dalam aplikasi Nobu ePay dan menyelesaikan transaksi.</Text>
              <Text></Text>
              <Text>11. Kata Sandi adalah rangkaian angka, huruf dan/atau simbol (atau kombinasi dari rangkaian angka, huruf dan/atau simbol) yang akan dikirimkan kepada Anda saat melakukan registrasi pertama kali dan digunakan untuk setiap kali Login</Text>
              <Text></Text>
              <Text>12. Mutasi adalah detail transaksi yang ditampilkan pada aplikasi Nobu ePay.</Text>
              <Text></Text>
              <Text>13. Know Your Customer (KYC) adalah proses mengenal pelanggan yang dilakukan dengan cara bertatap muka dengan pelanggan dan mencatat data pelanggan yang bersangkutan.</Text>
              <Text></Text>
              <Text>14. Syarat dan Ketentuan berarti Syarat dan Ketentuan ini berikut setiap perubahan, penambahan, penggantian, penyesuaian dan/atau modifikasinya yang dibuat dari waktu ke waktu.</Text>
              <Text></Text>
              <Text>15. Nobu Call adalah layanan keluhan nasabah dengan nomor 1 500 278.</Text>
              <Text></Text>
              <Text>16. UNIKAS adalah PT Dompet Unikas Indonesia merupakan salah satu aggregator yang telah bekerjasama dengan Nobu Bank dalam hal pengembangan aplikasi pembayaran menggunakan QR code serta perluasan jumlah Merchant.</Text>
              <Text></Text>
              <Text>II. Keanggotaan</Text>
              <Text>Keanggotaan Nobu ePay diatur sbb.:</Text>
              <Text>1. Untuk dapat menggunakan fasilitas Nobu ePay, Anda harus memenuhi persyaratan keanggotaan Nobu ePay yang berlaku, mengunduh aplikasi dan melakukan pembuatan akun baru (registrasi).</Text>
              <Text></Text>
              <Text>2. Keanggotaan Nobu ePay dapat diakhiri secara sepihak oleh Anda maupun oleh pihak Nobu Bank.</Text>
              <Text></Text>
              <Text>3. Untuk melakukan pengkinian data, dapat Anda lakukan melalui aplikasi Nobu ePay.</Text>
              <Text></Text>
              <Text>4. Segala kerugian yang timbul akibat tidak dilakukannya pengkinian data oleh Anda, khususnya perubahan alamat email dan/atau nomor handphone yang aktif, menjadi tanggung jawab Anda sepenuhnya.</Text>
              <Text></Text>
              <Text>5. Pengguna Unregistered tidak dapat menikmati layanan Kirim Uang dan Tarik Tunai serta memiliki limit saldo maksimum sebesar Rp 2.000.000,- (Dua Juta Rupiah)</Text>
              <Text></Text>
              <Text>6. Pengguna dapat melengkapi identitas diri serta mengunggah foto KTP dan foto Pemilik KTP pada menu Profil Nobu ePay untuk meningkatkan status keanggotaan dari Unregistered menjadi Registered. Pihak Bank akan melakukan review data untuk menyetujui/menolak permintaan peningkatan profil Anda menjadi Registered.</Text>
              <Text></Text>
              <Text>7. Pengguna Registered memiliki tambahan fitur berupa Kirim Uang dan Tarik Tunai serta memiliki limit saldo maksimum sebesar Rp 10.000.000,- (Sepuluh Juta Rupiah).</Text>
              <Text></Text>
              <Text>8. Setiap kali Nasabah melakukan Transaksi, Nasabah harus memasukkan PIN sebagai otorisasi transaksi.</Text>
              <Text></Text>
              <Text>9. Nasabah wajib menjaga kerahasiaan PIN. Nasabah bertanggung jawab sepenuhnya atas penggunaan PIN, termasuk dalam hal terjadi penyalahgunaan PIN</Text>
              <Text></Text>
              <Text>10. Dalam hal SIM Card ponsel Nasabah dengan nomor ponsel yang terdaftar sebagai nomor Nobu ePay dicuri atau hilang, maka Nasabah wajib untuk secepatnya menghubungi Nobu Call.</Text>
              <Text></Text>
              <Text>11. Setiap pemberitahuan mengenai pencurian atau kehilangan SIM Card ponsel Nasabah dengan nomor ponsel yang terdaftar sebagai nomor Nobu ePay, akan diikuti dengan pemblokiran oleh Bank terhadap nomor Nobu ePay yang bersangkutan. Pemblokiran tersebut akan tetap dilakukan oleh Bank sampai Bank menerima Pengajuan pembukaan pemblokiran atas nomor Nobu ePay dari Nasabah. Selama pemberitahuan pencurian atau kehilangan belum diterima oleh Bank, maka setiap Transaksi yang dilakukan dengan nomor ponsel yang terdaftar sebagai nomor Nobu ePay yang dicuri atau hilang menjadi tanggung jawab Nasabah sepenuhnya.</Text>
              <Text></Text>
              <Text>12. Pengajuan pembukaan pemblokiran atas nomor Nobu ePay milik Nasabah yang dilaporkan hilang SIM Card-nya dengan nomor ponsel yang terdaftar sebagai nomor Nobu ePay tersebut dapat diajukan oleh Nasabah ke Nobu Call. Bank berhak untuk melakukan verifikasi atas identitas Nasabah pada saat Nasabah mengajukan pembukaan pemblokiran atas nomor Nobu ePay.</Text>
              <Text></Text>
              <Text>13. Dana di Nobu ePay tidak mendapatkan bunga dan tidak dikenakan pajak.</Text>
              <Text></Text>
              <Text>III. Persyaratan Keanggotaan</Text>
              <Text></Text>
              <Text>1. Anda memiliki smartphone berbasis Android ataupun iOS yang terkoneksi dengan jaringan internet.</Text>
              <Text></Text>
              <Text>2. Anda memiliki nomor handphone & alamat email Pribadi yang masih aktif digunakan.</Text>
              <Text></Text>
              <Text>3. Anda telah membaca dan memahami Syarat dan Ketentuan menjadi pengguna Nobu ePay.</Text>
              <Text></Text>
              <Text>IV. Registrasi Keanggotaan</Text>
              <Text>Proses Pembuatan Akun Baru Nobu ePay:</Text>
              <Text>1. Pengguna mengunduh aplikasi Nobu ePay pada Google PlayStore ataupun AppStore</Text>
              <Text></Text>
              <Text>2. Buka aplikasi Nobu ePay.</Text>
              <Text></Text>
              <Text>3. Tekan tombol "Buat Akun Baru".</Text>
              <Text></Text>
              <Text>4. Masukkan nomor handphone pengguna.</Text>
              <Text></Text>
              <Text>5. Pengguna akan menerima kode verifikasi (6 digit angka) melalui SMS. Pastikan nomor HP pengguna memiliki pulsa yang cukup untuk menerima SMS kode verifikasi.</Text>
              <Text></Text>
              <Text>6. Isi nama lengkap pengguna sesuai dengan KTP.</Text>
              <Text></Text>
              <Text>7. Buat 6 digit PIN yang akan digunakan untuk login dan verifikasi transaksi.</Text>
              <Text></Text>
              <Text>8. Masukkan alamat email pengguna.</Text>
              <Text></Text>
              <Text>9. Pengguna akan masuk ke halaman utama aplikasi Nobu ePay.</Text>
              <Text></Text>
              <Text>10. Pada tahap ini pengguna akan terdaftar sebagai pemilik akun dengan status unregistered dengan saldo maksimal yang dapat di top up sebesar Rp 2.000.000,-(Dua Juta Rupiah).</Text>
              <Text></Text>
              <Text>11. Anda dapat meningkatkan status akun Nobu ePay menjadi registered dengan saldo maksimal yang dapat di top up sebesar Rp. 10.000.000,-. (Sepuluh Juta Rupiah).</Text>
              <Text></Text>
              <Text>12. Selanjutnya Anda dapat bertransaksi menggunakan akun Unregistered maupun Registered sesuai dengan Batas Nilai Transaksi yang telah ditetapkan.</Text>
              <Text></Text>
              <Text>V. Fitur-fitur Nobu ePay</Text>
              <Text>Fitur Nobu ePay Pengguna :</Text>
              <Text>1. Tambah Saldo</Text>
              <Text></Text>
              <Text>2. Bayar</Text>
              <Text></Text>
              <Text>3. Kirim Uang</Text>
              <Text></Text>
              <Text>4. Tarik tunai</Text>
              <Text></Text>
              <Text>5. History transaksi</Text>
              <Text></Text>
              <Text>Fitur Nobu ePay Pedagang</Text>
              <Text>1. Tambah saldo</Text>
              <Text></Text>
              <Text>2. Bayar</Text>
              <Text></Text>
              <Text>3. kirim uang</Text>
              <Text></Text>
              <Text>4. Minta bayar</Text>
              <Text></Text>
              <Text>5. Tarik tunai</Text>
              <Text></Text>
              <Text>6. History transaksi</Text>
              <Text></Text>
              <Text>7. Pedagang (minta bayar dan layanan tarik tunai)</Text>
              <Text></Text>
              <Text>* Tambah saldo / Top Up adalah fitur untuk melakukan penambahan saldo e-money pada aplikasi yang dilakukan melalui ATM atau internet banking.</Text>
              <Text></Text>
              <Text>* Bayar adalah transaksi pembayaran dari Pengguna ke Pedagang melalui scan QR code.</Text>
              <Text></Text>
              <Text>* Kirim Uang adalah transaksi pengiriman uang (transfer) ke sesama pemilik akun Nobu ePay dengan menginput nomor telepon.</Text>
              <Text></Text>
              <Text>* History adalah catatan seluruh transaksi mutasi uang eMoney pemilik akun Nobu ePay.</Text>
              <Text></Text>
              <Text>* Pedagang adalah menu untuk melihat seluruh catatan transaksi pembayaran yang sudah diterima dari Pengguna. Pedagang dapat melihat total pendapatan harian, mingguan ataupun bulanan.</Text>
              <Text></Text>
              <Text>5. Tarik tunai</Text>
              <Text></Text>
              <Text>6. History transaks</Text>
              <Text></Text>
              <Text>7. Pedagang (minta bayar dan layanan tarik tunai)</Text>
              <Text></Text>
              <Text>1. Minta bayar adalah fungsi yang digunakan oleh Pedagang untuk melakukan generate QR code atas tagihan kepada Pengguna untuk di scan.</Text>
              <Text></Text>
              <Text>2. Layanan Tarik Tunai adalah fungsi yang digunakan oleh Pedagang untuk melakukan generate QR Code atas pemintaan tarik tunai dari Pengguna.</Text>
              <Text></Text>
              <Text>VI. Kewajiban Keanggotaan</Text>
              <Text>1. Kerahasiaan dan penggunaan PIN login dan transaksi Nobu ePay adalah sepenuhnya menjadi tanggung jawab Andadan hanya boleh diketahui dan digunakan oleh Anda.</Text>
              <Text></Text>
              <Text>2. Anda wajib menjaga kerahasiaan user ID dan PIN transaksi agar tidak diketahui oleh orang lain, diantaranya dengan cara:</Text>
              <Text></Text>
              <Text>a. Tidak memberitahukannya kepada siapapun termasuk petugas Bank.</Text>
              <Text></Text>
              <Text>b. Tidak mencatat atau menyimpannya secara tertulis pada kertas atau media penyimpanan lainnya yang memungkinkan diketahui orang lain.</Text>
              <Text></Text>
              <Text>c. Berhati-hati dalam menggunakannya agar tidak terlihat orang lain.</Text>
              <Text></Text>
              <Text>d. Mengganti PIN transaksi Nobu ePay secara berkala.</Text>
              <Text></Text>
              <Text>e. Tidak menggunakan PIN transaksi yang mudah ditebak (penggunaan identitas Pribadi seperti tanggal lahir).</Text>
              <Text></Text>
              <Text>f. Hendaknya PIN transaksi berbeda dengan PIN e-channel lainnya (contoh: ATM).</Text>
              <Text></Text>
              <Text>3. Anda diberikan kebebasan untuk membuat PIN transaksi sendiri dan dapat mengubah/menggantinya setiap saat.</Text>
              <Text></Text>
              <Text>4. Apabila handphone atau nomor yang digunakan untuk bertransaksi Nobu ePay hilang, pada saat penggantian handphone dengan nomor yang sama, Andaharus melakukan penggantian PIN transaksi.</Text>
              <Text></Text>
              <Text>5. Apabila karena suatu sebab Andatidak dapat melakukan perubahan terhadap PIN transaksi, maka Andawajib memberitahukan kepadaNobu Bank melalui Nobu Call 1 500 278 untuk melaporkan hal tersebut dan meminta bantuan kepada petugas Nobu Bank.</Text>
              <Text></Text>
              <Text>6. Sebelum diterimanya permintaan dari Anda, maka segala perintah, transaksi dan komunikasi berdasarkan penggunaan user ID dan PIN oleh pihak yang tidak berwenang sepenuhnya menjadi tanggung jawab Anda.</Text>
              <Text></Text>
              <Text>7. Penggunaan user ID dan PIN transaksi mempunyai kekuatan hukum yang sama dengan perintah tertulis yang ditandatangani oleh Anda, oleh karena itu Andadengan ini menyatakan bahwa penggunaan user ID dan PIN transaksi dalam setiap perintah pada transaksi Nobu ePay juga merupakan pemberian kuasa dari Andakepada Nobu Bank untuk melaksanakan transaksi termasuk untuk melakukan pendebetan saldo Andabaik dalam rangka pelaksanaan transaksi yang diperintah maupun pembayaran biaya transaksinya.</Text>
              <Text></Text>
              <Text>8. Penyalahgunaan User ID dan PIN Nobu ePay beserta akibatnya merupakan tanggung jawab Andasepenuhnya.</Text>
              <Text></Text>
              <Text>9. Anda wajib menjaga smartphone dari aplikasi berbahaya (virus, malware, Trojan, dll), baik sebelum maupun setelah instalasi aplikasi Nobu ePay.</Text>
              <Text></Text>
              <Text>10. Segala kerugian yang ditimbulkan akibat aktivitas aplikasi berbahaya yang terdapat pada smartphone Anda, menjadi tanggung jawab Andasepenuhnya.</Text>
              <Text></Text>
              <Text>VII. Penggunaan Nobu ePay</Text>
              <Text>1. Nobu ePay hanya boleh digunakan oleh pengguna yang sah, yang terdaftar pada sistem databaseNobu ePay sesuai dengan nomor HP dan alamat email Anda yang didaftarkan.</Text>
              <Text></Text>
              <Text>2. Segala kerugian yang ditimbulkan akibat penggunaan Nobu ePay oleh pihak lain yang tidak berhak merupakan tanggung jawab Andasepenuhnya.</Text>
              <Text></Text>
              <Text>3. Anda dapat memanfaatkan Nobu ePay untuk transaksi finansial dan non finansial yang telah ditentukan oleh Kami.</Text>
              <Text></Text>
              <Text>4. Anda wajib mengisi secara lengkap dan benar serta memastikan ketepatan data yang dibutuhkan untuk transaksi finansial yang akan dilakukan.</Text>
            </View>
          </ScrollView>
         

        
      </View>

    </ScrollView>
    <TouchableOpacity onPress={ props.toSignUp } style={  styles.btnLogin } >
            <Text style={ styles.txtLogin }>Saya Setuju ! </Text>
          </TouchableOpacity>
    <ImageBackground source={footer_background} style={{
      width:'100%', height:'100%',
      position:'absolute',
      marginTop:heightPercentageToDP(65),zIndex:-10}}/>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  container:{
    marginHorizontal:widthPercentageToDP(5),  
    backgroundColor:'#F8F9F9'
  },
  iconBack:{
    fontSize:heightPercentageToDP(4),
    // marginVertical:widthPercentageToDP(5),
    color:'#3827B4',
    marginTop:heightPercentageToDP(2)
  },
  wrapperLoginWith:{
    flexDirection:'row', 
    justifyContent:'center', 
    marginTop:heightPercentageToDP(10)
  },
  txtGreating:{
    fontFamily:'sans-serif',
    fontSize:heightPercentageToDP(3),
    fontWeight:'bold',
    color:'#3827B4',
    // marginTop:heightPercentageToDP(10),
    textAlign:'center'
  },
  btnLoginWith:{
    width:widthPercentageToDP(42.5),
    height:heightPercentageToDP(5),
    borderWidth:1,
    borderRadius:5,
    borderColor:'rgba(119, 134, 158, 0.3)',
    marginRight:widthPercentageToDP(5),
    justifyContent:'center',
  },
  imageFB:{
    width:widthPercentageToDP(3.5),
    height:heightPercentageToDP(2.5),
    alignSelf:'center',
    resizeMode:'contain'
  },
  btnLoginWithGoogle:{
    width:widthPercentageToDP(42.5),
    height:heightPercentageToDP(5),
    borderWidth:1,
    borderRadius:5,
    borderColor:'rgba(119, 134, 158, 0.3)',
    justifyContent:'center'
  },
  imageGoogle:{
    width:widthPercentageToDP(5),
    height:widthPercentageToDP(5),
    alignSelf:'center',
    resizeMode:'contain'
  },
  txtUsername:{
    color:'#77869E',
  },
  underlineInput:{
    borderBottomWidth:2,
    borderBottomColor:'#309abb',
    paddingBottom:heightPercentageToDP(0.5)
  },
  txtInput:{
    fontSize:heightPercentageToDP(2), 
    marginLeft:widthPercentageToDP(4)
  },
  circle:{
    width:widthPercentageToDP(5), 
    height:widthPercentageToDP(5), 
    borderWidth:0.5, 
    borderRadius:widthPercentageToDP(2.5),
  },
  txtRememberMe:{
    textAlign:'center', 
    marginLeft: widthPercentageToDP(2)
  },
  txtForgotPass:{
    color:'#0047CC', 
    fontStyle:'italic', 
    fontFamily:'avenir', 
    fontWeight:'800', 
    textAlign:'right', 
    alignSelf:'flex-end', 
    right:0
  },
  btnLogin:{
    backgroundColor:'#E61EAD', 
    borderRadius: 5, 
    height:heightPercentageToDP(6.5),  
    justifyContent:'center',
    position: 'absolute',
    bottom:30,left:0,right:0,
    alignContent:'center',
    marginLeft:widthPercentageToDP(5),
    marginRight:widthPercentageToDP(5)
  },
  btnLoginDisabled:{
    backgroundColor:'#E61EAD', 
    borderRadius: 5, 
    height:heightPercentageToDP(6.5), 
    width:widthPercentageToDP(90), 
    justifyContent:'center',
    borderRadius:10,
  },
  txtLogin:{
    fontWeight:'600', 
    fontFamily:'Avenir', 
    alignSelf:'center', 
    color:'#fff', 
    fontSize:heightPercentageToDP(2)
  },
  txtDontHave:{
    color:'#77869E', 
    fontFamily:'Avenir', 
    fontSize:heightPercentageToDP(1.8), 
    alignSelf:'center', 
    marginTop:heightPercentageToDP(2)
  },
  fieldBox:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 2,
    backgroundColor:'#fff',
    borderRadius:10,
    marginTop:heightPercentageToDP(2)
  },
  icon:{
    marginTop:heightPercentageToDP(1.2),
    height:heightPercentageToDP('4%'),
    width:widthPercentageToDP('7%'),
    marginRight:5
  },
})

export default Register