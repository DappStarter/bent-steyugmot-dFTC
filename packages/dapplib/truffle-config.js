require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clock other foot dance crawl total provide hope knife army ghost'; 
let testAccounts = [
"0xc8d7e9b2702efa20f31650adb2fa83dd143f60fc3758e8e2a8ab1b5fddff6982",
"0x2a4be4d6e7cd02beeac572f0a041b1b0e0eb06ce64158f3c2cb8d8eda58c2bf9",
"0x09a43bef1535a0702b19757ee43cdcbeb9840f7e274c761cce07703d65ac180a",
"0x054bede76f40380f0e3cd00f714cf244619297b65cde21649382e56b1cdb8bf2",
"0x52c91ddaedf701d7b28612a8162c24757b09b32f31a85821d6dbb84dbee806e5",
"0xc7c377df464afba326d07fe72497c68ebbd813bbefd175602f0add1559ee6b67",
"0x39275802f2b392f07e2fa9b15c4154e2d6bbd505317571677334c5d0182829fa",
"0x2e4507d2b58c0b1cbed046cd34e61146bef2b29c78609e415f3699672b9abb04",
"0x5008e0d35fc8b0fb52b833d8d093a3ed7a9ffae54ce00efb6a2ab8f7a573d7e9",
"0xd6b09b3c6278e8bd08d95dde561760b1644a775512922ea712ad2c18766a15f0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

