import { Connect, SimpleSigner } from 'uport-connect'

export let uport = new Connect('Dora Hacks Smart Meter App', {
    clientId: '2ozWbLqrisYqxe7f6TWdjpiEHwNRRKG3uEi',
    network: 'rinkeby',
    signer: SimpleSigner('9549b5b78664bd51a2f8d326b848195ca240e83e2e167aa6a593f55ed877aad7')
  })

export const web3 = uport.getWeb3()
