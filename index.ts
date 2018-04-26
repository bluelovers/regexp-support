/**
 * Created by user on 2018/4/26/026.
 */

import lib, { hasSupportFlag, testFlag } from './lib';
import FlagsName from './lib/flags';
import PatternSupport, { testPattern } from './lib/pattern';

const _support = {
	/**
	 * flag support with name
	 */
	flags: Object
		.keys(FlagsName)
		.reduce(function (a, flags)
		{
			let bool: boolean = false;

			if (flags in a)
			{
				bool = a[flags];
			}
			else if (FlagsName[flags] in a)
			{
				bool = a[FlagsName[flags]];
			}
			else
			{
				bool = hasSupportFlag(FlagsName[flags]);
			}

			a[flags] = bool;

			return a;
		}, {} as {
			[k in keyof typeof FlagsName]: boolean
		}),

	/**
	 * all flag support without name
	 */
	flagsAll: {} as {
		g: boolean,
		i: boolean,
		m: boolean,
		s: boolean,
		u: boolean,
		y: boolean,
		[key: string]: boolean
	},

	pattern: Object.keys(PatternSupport).reduce(function (a, key)
	{
		a[key] = testPattern(key);
		return a;
	}, PatternSupport),
};

{
	let flagsAll = {};

	for (let i = 65; i <= 90; i++)
	{
		let k1 = String.fromCharCode(i);
		let k2 = String.fromCharCode(i + 32);

		flagsAll[k1] = hasSupportFlag(k1);
		flagsAll[k2] = hasSupportFlag(k2);
	}

	// @ts-ignore
	_support.flagsAll = Object.keys(flagsAll).sort().reduce(function (a, flag)
	{
		if (flagsAll[flag])
		{
			a[flag] = flagsAll[flag];
		}

		return a;
	}, {});
}

export const support = Object.freeze(_support);

export import hasSupportFlag = lib.hasSupportFlag
export import testFlag = lib.testFlag

type valueof<T> = T[keyof T];

export default support
