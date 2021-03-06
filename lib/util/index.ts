/**
 * Created by user on 2018/5/6/006.
 */

import { ICreateRegExp, ITypeCreateRegExp } from '../index';
import { testPattern } from '../pattern';
import * as util from 'util';

//util.inspect.defaultOptions.colors = true;

export function log_dir(...argv)
{
	argv = argv.reduce(function (a, b)
	{
		let c = util.inspect(b, {
			colors: true,
		});

		a.push(c);

		return a;
	}, []);

	console.log(...argv);
}

export interface IFnTestPattern<R>
{
	(name: string, RegExpClass?: typeof RegExp, testPatterns?: R): boolean
	(name: string, RegExpClass?: ICreateRegExp, testPatterns?: R): boolean
	<T>(name: string, RegExpClass?: ITypeCreateRegExp<T>, testPatterns?: R): boolean
}

export function _createFnTestPattern<R>(initTestPatterns: R): {
	(name: string, RegExpClass?: typeof RegExp, testPatterns?: R): boolean
	(name: string, RegExpClass?: ICreateRegExp, testPatterns?: R): boolean
	<T>(name: string, RegExpClass?: ITypeCreateRegExp<T>, testPatterns?: R): boolean
}
{
	return <T>(name: string,
		// @ts-ignore
		RegExpClass: ITypeCreateRegExp<T> = RegExp,
		testPatterns = initTestPatterns
	): boolean =>
	{
		// @ts-ignore
		return testPattern(name, RegExpClass, testPatterns);
	};
}
