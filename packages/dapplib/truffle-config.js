require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'hockey knife off suggest name raise situate coconut harvest crew forget genuine'; 
let testAccounts = [
"0xd5465be308d8cd4428fa15b7e5dcdab4479b0187956306b2cd86a8a2b50de20a",
"0xd66785288fd2b7b0cdc194d3a3cb89f7c52ff9922aa017c39b9431bd182fc0b8",
"0x1c4d8835f92f3b718fa09291532855eb42c3e4ab9c3a8c9fe76eb3624a2eb2cb",
"0xc17a7e5a4f4c18416f4c00bb3562906a9f37ceae76eae1bb7e3787fda7a350d3",
"0xc0cdf4de4e05e8104aeda79158646753cd1051ff7b8798c716c5bd812dbe6d39",
"0x204c013d56bf32ade8282aa8a54fbe6cf25f5d2a13224010e00c587447653faa",
"0x6b5b8a06a8cf3bee1ca5f702fcd87bf7de69467290275d1dacac99cdf53e0b62",
"0x1280449da49d60413a0f524d7c9107e16b15a1f5a3a4c20ac7dd5fa2e1d42c3a",
"0xd76203e27eb03d8b2620e55ede713b37d9a3e4c15d0087dc77f2a11503f7144e",
"0x685223effec4e99c1ad256447787402bbb98fdef35c975cdda2b906399810931"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


