import { expect, use } from 'chai'
import { solidity } from 'ethereum-waffle'
import { deploy, makeSnapshot, resetChain } from './utils'
import { ExampleToken } from '../typechain-types'

use(solidity)

describe('Example', () => {
	let example: ExampleToken
	let snapshot: string
	before(async () => {
		example = await deploy<ExampleToken>('ExampleToken')
		await example.initialize()
	})
	beforeEach(async () => {
		snapshot = await makeSnapshot()
	})
	afterEach(async () => {
		await resetChain(snapshot)
	})
	describe('name', () => {
		it('check name', async () => {
			const value = await example.name()
			expect(value.toString()).to.equal('token')
		})
	})
	describe('symbol', () => {
		it('check symbol', async () => {
			const symbol = await example.symbol()
			expect(symbol.toString()).to.equal('TOKEN')
		})
	})
})
