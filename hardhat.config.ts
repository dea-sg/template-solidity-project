import '@nomicfoundation/hardhat-toolbox'
import '@openzeppelin/hardhat-upgrades'
import '@nomicfoundation/hardhat-chai-matchers'
import * as dotenv from 'dotenv'

dotenv.config()

const privateKey =
	typeof process.env.PRIVATE_KEY === 'undefined'
		? '0000000000000000000000000000000000000000000000000000000000000000'
		: process.env.PRIVATE_KEY

const config = {
	solidity: {
		version: '0.8.23',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	networks: {
		rinkeby: {
			url: `https://eth-rinkeby.alchemyapi.io/v2/${process.env.ARCHEMY_KEY!}`,
			accounts: [privateKey],
		},
		polygonMumbai: {
			url: `https://polygon-mumbai.g.alchemy.com/v2/${process.env
				.ARCHEMY_KEY!}`,
			accounts: [privateKey],
		},
	},
	etherscan: {
		apiKey: {
			rinkeby: process.env.ETHERSCAN_API_KEY!,
			polygonMumbai: process.env.POLYGONSCAN_API_KEY!,
		},
	},
}

export default config
