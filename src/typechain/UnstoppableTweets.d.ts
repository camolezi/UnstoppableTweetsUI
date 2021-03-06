/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface UnstoppableTweetsInterface extends ethers.utils.Interface {
  functions: {
    "createNewTweet(string)": FunctionFragment;
    "createNewUserName(string)": FunctionFragment;
    "getAllTweets()": FunctionFragment;
    "hasUserName(address)": FunctionFragment;
    "tweets(uint256)": FunctionFragment;
    "userNames(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "createNewTweet",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "createNewUserName",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getAllTweets",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "hasUserName", values: [string]): string;
  encodeFunctionData(
    functionFragment: "tweets",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "userNames", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "createNewTweet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createNewUserName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAllTweets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hasUserName",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "tweets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "userNames", data: BytesLike): Result;

  events: {};
}

export class UnstoppableTweets extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: UnstoppableTweetsInterface;

  functions: {
    createNewTweet(
      message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createNewUserName(
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAllTweets(
      overrides?: CallOverrides
    ): Promise<[([string, string] & { text: string; user: string })[]]>;

    hasUserName(adr: string, overrides?: CallOverrides): Promise<[boolean]>;

    tweets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { text: string; user: string }>;

    userNames(arg0: string, overrides?: CallOverrides): Promise<[string]>;
  };

  createNewTweet(
    message: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createNewUserName(
    username: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAllTweets(
    overrides?: CallOverrides
  ): Promise<([string, string] & { text: string; user: string })[]>;

  hasUserName(adr: string, overrides?: CallOverrides): Promise<boolean>;

  tweets(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<[string, string] & { text: string; user: string }>;

  userNames(arg0: string, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    createNewTweet(message: string, overrides?: CallOverrides): Promise<void>;

    createNewUserName(
      username: string,
      overrides?: CallOverrides
    ): Promise<void>;

    getAllTweets(
      overrides?: CallOverrides
    ): Promise<([string, string] & { text: string; user: string })[]>;

    hasUserName(adr: string, overrides?: CallOverrides): Promise<boolean>;

    tweets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string, string] & { text: string; user: string }>;

    userNames(arg0: string, overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    createNewTweet(
      message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createNewUserName(
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAllTweets(overrides?: CallOverrides): Promise<BigNumber>;

    hasUserName(adr: string, overrides?: CallOverrides): Promise<BigNumber>;

    tweets(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    userNames(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    createNewTweet(
      message: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createNewUserName(
      username: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAllTweets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hasUserName(
      adr: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tweets(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userNames(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
