
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Administrator
 * 
 */
export type Administrator = $Result.DefaultSelection<Prisma.$AdministratorPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Game
 * 
 */
export type Game = $Result.DefaultSelection<Prisma.$GamePayload>
/**
 * Model Bet
 * 
 */
export type Bet = $Result.DefaultSelection<Prisma.$BetPayload>
/**
 * Model GameOngoingUsers
 * 
 */
export type GameOngoingUsers = $Result.DefaultSelection<Prisma.$GameOngoingUsersPayload>
/**
 * Model OngoingTeenpattiGame
 * 
 */
export type OngoingTeenpattiGame = $Result.DefaultSelection<Prisma.$OngoingTeenpattiGamePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organizations
 * const organizations = await prisma.organization.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organizations
   * const organizations = await prisma.organization.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.administrator`: Exposes CRUD operations for the **Administrator** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Administrators
    * const administrators = await prisma.administrator.findMany()
    * ```
    */
  get administrator(): Prisma.AdministratorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.game`: Exposes CRUD operations for the **Game** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Games
    * const games = await prisma.game.findMany()
    * ```
    */
  get game(): Prisma.GameDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.bet`: Exposes CRUD operations for the **Bet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bets
    * const bets = await prisma.bet.findMany()
    * ```
    */
  get bet(): Prisma.BetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gameOngoingUsers`: Exposes CRUD operations for the **GameOngoingUsers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GameOngoingUsers
    * const gameOngoingUsers = await prisma.gameOngoingUsers.findMany()
    * ```
    */
  get gameOngoingUsers(): Prisma.GameOngoingUsersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ongoingTeenpattiGame`: Exposes CRUD operations for the **OngoingTeenpattiGame** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OngoingTeenpattiGames
    * const ongoingTeenpattiGames = await prisma.ongoingTeenpattiGame.findMany()
    * ```
    */
  get ongoingTeenpattiGame(): Prisma.OngoingTeenpattiGameDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organization: 'Organization',
    Administrator: 'Administrator',
    User: 'User',
    Game: 'Game',
    Bet: 'Bet',
    GameOngoingUsers: 'GameOngoingUsers',
    OngoingTeenpattiGame: 'OngoingTeenpattiGame'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "organization" | "administrator" | "user" | "game" | "bet" | "gameOngoingUsers" | "ongoingTeenpattiGame"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Administrator: {
        payload: Prisma.$AdministratorPayload<ExtArgs>
        fields: Prisma.AdministratorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdministratorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdministratorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          findFirst: {
            args: Prisma.AdministratorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdministratorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          findMany: {
            args: Prisma.AdministratorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>[]
          }
          create: {
            args: Prisma.AdministratorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          createMany: {
            args: Prisma.AdministratorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdministratorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          update: {
            args: Prisma.AdministratorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          deleteMany: {
            args: Prisma.AdministratorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdministratorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdministratorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdministratorPayload>
          }
          aggregate: {
            args: Prisma.AdministratorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdministrator>
          }
          groupBy: {
            args: Prisma.AdministratorGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdministratorGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdministratorCountArgs<ExtArgs>
            result: $Utils.Optional<AdministratorCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Game: {
        payload: Prisma.$GamePayload<ExtArgs>
        fields: Prisma.GameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findFirst: {
            args: Prisma.GameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          findMany: {
            args: Prisma.GameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>[]
          }
          create: {
            args: Prisma.GameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          createMany: {
            args: Prisma.GameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          update: {
            args: Prisma.GameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          deleteMany: {
            args: Prisma.GameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GamePayload>
          }
          aggregate: {
            args: Prisma.GameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGame>
          }
          groupBy: {
            args: Prisma.GameGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameCountArgs<ExtArgs>
            result: $Utils.Optional<GameCountAggregateOutputType> | number
          }
        }
      }
      Bet: {
        payload: Prisma.$BetPayload<ExtArgs>
        fields: Prisma.BetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findFirst: {
            args: Prisma.BetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          findMany: {
            args: Prisma.BetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>[]
          }
          create: {
            args: Prisma.BetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          createMany: {
            args: Prisma.BetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.BetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          update: {
            args: Prisma.BetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          deleteMany: {
            args: Prisma.BetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.BetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BetPayload>
          }
          aggregate: {
            args: Prisma.BetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBet>
          }
          groupBy: {
            args: Prisma.BetGroupByArgs<ExtArgs>
            result: $Utils.Optional<BetGroupByOutputType>[]
          }
          count: {
            args: Prisma.BetCountArgs<ExtArgs>
            result: $Utils.Optional<BetCountAggregateOutputType> | number
          }
        }
      }
      GameOngoingUsers: {
        payload: Prisma.$GameOngoingUsersPayload<ExtArgs>
        fields: Prisma.GameOngoingUsersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GameOngoingUsersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameOngoingUsersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GameOngoingUsersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameOngoingUsersPayload>
          }
          findFirst: {
            args: Prisma.GameOngoingUsersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameOngoingUsersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GameOngoingUsersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameOngoingUsersPayload>
          }
          findMany: {
            args: Prisma.GameOngoingUsersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameOngoingUsersPayload>[]
          }
          create: {
            args: Prisma.GameOngoingUsersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameOngoingUsersPayload>
          }
          createMany: {
            args: Prisma.GameOngoingUsersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.GameOngoingUsersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameOngoingUsersPayload>
          }
          update: {
            args: Prisma.GameOngoingUsersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameOngoingUsersPayload>
          }
          deleteMany: {
            args: Prisma.GameOngoingUsersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GameOngoingUsersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.GameOngoingUsersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GameOngoingUsersPayload>
          }
          aggregate: {
            args: Prisma.GameOngoingUsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGameOngoingUsers>
          }
          groupBy: {
            args: Prisma.GameOngoingUsersGroupByArgs<ExtArgs>
            result: $Utils.Optional<GameOngoingUsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.GameOngoingUsersCountArgs<ExtArgs>
            result: $Utils.Optional<GameOngoingUsersCountAggregateOutputType> | number
          }
        }
      }
      OngoingTeenpattiGame: {
        payload: Prisma.$OngoingTeenpattiGamePayload<ExtArgs>
        fields: Prisma.OngoingTeenpattiGameFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OngoingTeenpattiGameFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingTeenpattiGamePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OngoingTeenpattiGameFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingTeenpattiGamePayload>
          }
          findFirst: {
            args: Prisma.OngoingTeenpattiGameFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingTeenpattiGamePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OngoingTeenpattiGameFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingTeenpattiGamePayload>
          }
          findMany: {
            args: Prisma.OngoingTeenpattiGameFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingTeenpattiGamePayload>[]
          }
          create: {
            args: Prisma.OngoingTeenpattiGameCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingTeenpattiGamePayload>
          }
          createMany: {
            args: Prisma.OngoingTeenpattiGameCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.OngoingTeenpattiGameDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingTeenpattiGamePayload>
          }
          update: {
            args: Prisma.OngoingTeenpattiGameUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingTeenpattiGamePayload>
          }
          deleteMany: {
            args: Prisma.OngoingTeenpattiGameDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OngoingTeenpattiGameUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.OngoingTeenpattiGameUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OngoingTeenpattiGamePayload>
          }
          aggregate: {
            args: Prisma.OngoingTeenpattiGameAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOngoingTeenpattiGame>
          }
          groupBy: {
            args: Prisma.OngoingTeenpattiGameGroupByArgs<ExtArgs>
            result: $Utils.Optional<OngoingTeenpattiGameGroupByOutputType>[]
          }
          count: {
            args: Prisma.OngoingTeenpattiGameCountArgs<ExtArgs>
            result: $Utils.Optional<OngoingTeenpattiGameCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    organization?: OrganizationOmit
    administrator?: AdministratorOmit
    user?: UserOmit
    game?: GameOmit
    bet?: BetOmit
    gameOngoingUsers?: GameOngoingUsersOmit
    ongoingTeenpattiGame?: OngoingTeenpattiGameOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    administrators: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrators?: boolean | OrganizationCountOutputTypeCountAdministratorsArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAdministratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministratorWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    id: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    dbHost: string | null
    dbName: string | null
    dbUser: string | null
    dbPassword: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    dbHost: string | null
    dbName: string | null
    dbUser: string | null
    dbPassword: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    name: number
    email: number
    dbHost: number
    dbName: number
    dbUser: number
    dbPassword: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    id?: true
  }

  export type OrganizationSumAggregateInputType = {
    id?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    dbHost?: true
    dbName?: true
    dbUser?: true
    dbPassword?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    dbHost?: true
    dbName?: true
    dbUser?: true
    dbPassword?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    dbHost?: true
    dbName?: true
    dbUser?: true
    dbPassword?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: number
    name: string
    email: string
    dbHost: string
    dbName: string
    dbUser: string
    dbPassword: string
    status: string
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    dbHost?: boolean
    dbName?: boolean
    dbUser?: boolean
    dbPassword?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    administrators?: boolean | Organization$administratorsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>



  export type OrganizationSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    dbHost?: boolean
    dbName?: boolean
    dbUser?: boolean
    dbPassword?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "dbHost" | "dbName" | "dbUser" | "dbPassword" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    administrators?: boolean | Organization$administratorsArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      administrators: Prisma.$AdministratorPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      dbHost: string
      dbName: string
      dbUser: string
      dbPassword: string
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    administrators<T extends Organization$administratorsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$administratorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'Int'>
    readonly name: FieldRef<"Organization", 'String'>
    readonly email: FieldRef<"Organization", 'String'>
    readonly dbHost: FieldRef<"Organization", 'String'>
    readonly dbName: FieldRef<"Organization", 'String'>
    readonly dbUser: FieldRef<"Organization", 'String'>
    readonly dbPassword: FieldRef<"Organization", 'String'>
    readonly status: FieldRef<"Organization", 'String'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.administrators
   */
  export type Organization$administratorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    where?: AdministratorWhereInput
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    cursor?: AdministratorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Administrator
   */

  export type AggregateAdministrator = {
    _count: AdministratorCountAggregateOutputType | null
    _avg: AdministratorAvgAggregateOutputType | null
    _sum: AdministratorSumAggregateOutputType | null
    _min: AdministratorMinAggregateOutputType | null
    _max: AdministratorMaxAggregateOutputType | null
  }

  export type AdministratorAvgAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type AdministratorSumAggregateOutputType = {
    id: number | null
    organizationId: number | null
  }

  export type AdministratorMinAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    organizationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministratorMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password: string | null
    role: string | null
    organizationId: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdministratorCountAggregateOutputType = {
    id: number
    email: number
    password: number
    role: number
    organizationId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdministratorAvgAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type AdministratorSumAggregateInputType = {
    id?: true
    organizationId?: true
  }

  export type AdministratorMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministratorMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdministratorCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    role?: true
    organizationId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdministratorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrator to aggregate.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Administrators
    **/
    _count?: true | AdministratorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdministratorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdministratorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdministratorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdministratorMaxAggregateInputType
  }

  export type GetAdministratorAggregateType<T extends AdministratorAggregateArgs> = {
        [P in keyof T & keyof AggregateAdministrator]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdministrator[P]>
      : GetScalarType<T[P], AggregateAdministrator[P]>
  }




  export type AdministratorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdministratorWhereInput
    orderBy?: AdministratorOrderByWithAggregationInput | AdministratorOrderByWithAggregationInput[]
    by: AdministratorScalarFieldEnum[] | AdministratorScalarFieldEnum
    having?: AdministratorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdministratorCountAggregateInputType | true
    _avg?: AdministratorAvgAggregateInputType
    _sum?: AdministratorSumAggregateInputType
    _min?: AdministratorMinAggregateInputType
    _max?: AdministratorMaxAggregateInputType
  }

  export type AdministratorGroupByOutputType = {
    id: number
    email: string
    password: string
    role: string
    organizationId: number
    createdAt: Date
    updatedAt: Date
    _count: AdministratorCountAggregateOutputType | null
    _avg: AdministratorAvgAggregateOutputType | null
    _sum: AdministratorSumAggregateOutputType | null
    _min: AdministratorMinAggregateOutputType | null
    _max: AdministratorMaxAggregateOutputType | null
  }

  type GetAdministratorGroupByPayload<T extends AdministratorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdministratorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdministratorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdministratorGroupByOutputType[P]>
            : GetScalarType<T[P], AdministratorGroupByOutputType[P]>
        }
      >
    >


  export type AdministratorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["administrator"]>



  export type AdministratorSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    organizationId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AdministratorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "role" | "organizationId" | "createdAt" | "updatedAt", ExtArgs["result"]["administrator"]>
  export type AdministratorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $AdministratorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Administrator"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password: string
      role: string
      organizationId: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["administrator"]>
    composites: {}
  }

  type AdministratorGetPayload<S extends boolean | null | undefined | AdministratorDefaultArgs> = $Result.GetResult<Prisma.$AdministratorPayload, S>

  type AdministratorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdministratorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdministratorCountAggregateInputType | true
    }

  export interface AdministratorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Administrator'], meta: { name: 'Administrator' } }
    /**
     * Find zero or one Administrator that matches the filter.
     * @param {AdministratorFindUniqueArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdministratorFindUniqueArgs>(args: SelectSubset<T, AdministratorFindUniqueArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Administrator that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdministratorFindUniqueOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdministratorFindUniqueOrThrowArgs>(args: SelectSubset<T, AdministratorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrator that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindFirstArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdministratorFindFirstArgs>(args?: SelectSubset<T, AdministratorFindFirstArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Administrator that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindFirstOrThrowArgs} args - Arguments to find a Administrator
     * @example
     * // Get one Administrator
     * const administrator = await prisma.administrator.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdministratorFindFirstOrThrowArgs>(args?: SelectSubset<T, AdministratorFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Administrators that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Administrators
     * const administrators = await prisma.administrator.findMany()
     * 
     * // Get first 10 Administrators
     * const administrators = await prisma.administrator.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const administratorWithIdOnly = await prisma.administrator.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdministratorFindManyArgs>(args?: SelectSubset<T, AdministratorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Administrator.
     * @param {AdministratorCreateArgs} args - Arguments to create a Administrator.
     * @example
     * // Create one Administrator
     * const Administrator = await prisma.administrator.create({
     *   data: {
     *     // ... data to create a Administrator
     *   }
     * })
     * 
     */
    create<T extends AdministratorCreateArgs>(args: SelectSubset<T, AdministratorCreateArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Administrators.
     * @param {AdministratorCreateManyArgs} args - Arguments to create many Administrators.
     * @example
     * // Create many Administrators
     * const administrator = await prisma.administrator.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdministratorCreateManyArgs>(args?: SelectSubset<T, AdministratorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Administrator.
     * @param {AdministratorDeleteArgs} args - Arguments to delete one Administrator.
     * @example
     * // Delete one Administrator
     * const Administrator = await prisma.administrator.delete({
     *   where: {
     *     // ... filter to delete one Administrator
     *   }
     * })
     * 
     */
    delete<T extends AdministratorDeleteArgs>(args: SelectSubset<T, AdministratorDeleteArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Administrator.
     * @param {AdministratorUpdateArgs} args - Arguments to update one Administrator.
     * @example
     * // Update one Administrator
     * const administrator = await prisma.administrator.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdministratorUpdateArgs>(args: SelectSubset<T, AdministratorUpdateArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Administrators.
     * @param {AdministratorDeleteManyArgs} args - Arguments to filter Administrators to delete.
     * @example
     * // Delete a few Administrators
     * const { count } = await prisma.administrator.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdministratorDeleteManyArgs>(args?: SelectSubset<T, AdministratorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Administrators
     * const administrator = await prisma.administrator.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdministratorUpdateManyArgs>(args: SelectSubset<T, AdministratorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Administrator.
     * @param {AdministratorUpsertArgs} args - Arguments to update or create a Administrator.
     * @example
     * // Update or create a Administrator
     * const administrator = await prisma.administrator.upsert({
     *   create: {
     *     // ... data to create a Administrator
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Administrator we want to update
     *   }
     * })
     */
    upsert<T extends AdministratorUpsertArgs>(args: SelectSubset<T, AdministratorUpsertArgs<ExtArgs>>): Prisma__AdministratorClient<$Result.GetResult<Prisma.$AdministratorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Administrators.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorCountArgs} args - Arguments to filter Administrators to count.
     * @example
     * // Count the number of Administrators
     * const count = await prisma.administrator.count({
     *   where: {
     *     // ... the filter for the Administrators we want to count
     *   }
     * })
    **/
    count<T extends AdministratorCountArgs>(
      args?: Subset<T, AdministratorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdministratorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdministratorAggregateArgs>(args: Subset<T, AdministratorAggregateArgs>): Prisma.PrismaPromise<GetAdministratorAggregateType<T>>

    /**
     * Group by Administrator.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdministratorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdministratorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdministratorGroupByArgs['orderBy'] }
        : { orderBy?: AdministratorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdministratorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdministratorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Administrator model
   */
  readonly fields: AdministratorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Administrator.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdministratorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Administrator model
   */
  interface AdministratorFieldRefs {
    readonly id: FieldRef<"Administrator", 'Int'>
    readonly email: FieldRef<"Administrator", 'String'>
    readonly password: FieldRef<"Administrator", 'String'>
    readonly role: FieldRef<"Administrator", 'String'>
    readonly organizationId: FieldRef<"Administrator", 'Int'>
    readonly createdAt: FieldRef<"Administrator", 'DateTime'>
    readonly updatedAt: FieldRef<"Administrator", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Administrator findUnique
   */
  export type AdministratorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator findUniqueOrThrow
   */
  export type AdministratorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator findFirst
   */
  export type AdministratorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator findFirstOrThrow
   */
  export type AdministratorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrator to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Administrators.
     */
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator findMany
   */
  export type AdministratorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter, which Administrators to fetch.
     */
    where?: AdministratorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Administrators to fetch.
     */
    orderBy?: AdministratorOrderByWithRelationInput | AdministratorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Administrators.
     */
    cursor?: AdministratorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Administrators from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Administrators.
     */
    skip?: number
    distinct?: AdministratorScalarFieldEnum | AdministratorScalarFieldEnum[]
  }

  /**
   * Administrator create
   */
  export type AdministratorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * The data needed to create a Administrator.
     */
    data: XOR<AdministratorCreateInput, AdministratorUncheckedCreateInput>
  }

  /**
   * Administrator createMany
   */
  export type AdministratorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Administrators.
     */
    data: AdministratorCreateManyInput | AdministratorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Administrator update
   */
  export type AdministratorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * The data needed to update a Administrator.
     */
    data: XOR<AdministratorUpdateInput, AdministratorUncheckedUpdateInput>
    /**
     * Choose, which Administrator to update.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator updateMany
   */
  export type AdministratorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Administrators.
     */
    data: XOR<AdministratorUpdateManyMutationInput, AdministratorUncheckedUpdateManyInput>
    /**
     * Filter which Administrators to update
     */
    where?: AdministratorWhereInput
    /**
     * Limit how many Administrators to update.
     */
    limit?: number
  }

  /**
   * Administrator upsert
   */
  export type AdministratorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * The filter to search for the Administrator to update in case it exists.
     */
    where: AdministratorWhereUniqueInput
    /**
     * In case the Administrator found by the `where` argument doesn't exist, create a new Administrator with this data.
     */
    create: XOR<AdministratorCreateInput, AdministratorUncheckedCreateInput>
    /**
     * In case the Administrator was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdministratorUpdateInput, AdministratorUncheckedUpdateInput>
  }

  /**
   * Administrator delete
   */
  export type AdministratorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
    /**
     * Filter which Administrator to delete.
     */
    where: AdministratorWhereUniqueInput
  }

  /**
   * Administrator deleteMany
   */
  export type AdministratorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Administrators to delete
     */
    where?: AdministratorWhereInput
    /**
     * Limit how many Administrators to delete.
     */
    limit?: number
  }

  /**
   * Administrator without action
   */
  export type AdministratorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Administrator
     */
    select?: AdministratorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Administrator
     */
    omit?: AdministratorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdministratorInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    totalGamePlayed: number | null
    gameWon: number | null
    gameLost: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    totalGamePlayed: number | null
    gameWon: number | null
    gameLost: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    appKey: string | null
    totalGamePlayed: number | null
    gameWon: number | null
    gameLost: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    appKey: string | null
    totalGamePlayed: number | null
    gameWon: number | null
    gameLost: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    appKey: number
    totalGamePlayed: number
    gameWon: number
    gameLost: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    appKey?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    appKey?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    appKey?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    userId: string | null
    name: string | null
    appKey: string | null
    totalGamePlayed: number
    gameWon: number
    gameLost: number
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    appKey?: boolean
    totalGamePlayed?: boolean
    gameWon?: boolean
    gameLost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>



  export type UserSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    appKey?: boolean
    totalGamePlayed?: boolean
    gameWon?: boolean
    gameLost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "appKey" | "totalGamePlayed" | "gameWon" | "gameLost" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string | null
      name: string | null
      appKey: string | null
      totalGamePlayed: number
      gameWon: number
      gameLost: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly userId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly appKey: FieldRef<"User", 'String'>
    readonly totalGamePlayed: FieldRef<"User", 'Int'>
    readonly gameWon: FieldRef<"User", 'Int'>
    readonly gameLost: FieldRef<"User", 'Int'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Game
   */

  export type AggregateGame = {
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  export type GameAvgAggregateOutputType = {
    id: number | null
  }

  export type GameSumAggregateOutputType = {
    id: number | null
  }

  export type GameMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    appKey: string | null
    token: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    appKey: string | null
    token: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameCountAggregateOutputType = {
    id: number
    name: number
    description: number
    appKey: number
    token: number
    status: number
    config: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameAvgAggregateInputType = {
    id?: true
  }

  export type GameSumAggregateInputType = {
    id?: true
  }

  export type GameMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    appKey?: true
    token?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    appKey?: true
    token?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    appKey?: true
    token?: true
    status?: true
    config?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Game to aggregate.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Games
    **/
    _count?: true | GameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameMaxAggregateInputType
  }

  export type GetGameAggregateType<T extends GameAggregateArgs> = {
        [P in keyof T & keyof AggregateGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGame[P]>
      : GetScalarType<T[P], AggregateGame[P]>
  }




  export type GameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameWhereInput
    orderBy?: GameOrderByWithAggregationInput | GameOrderByWithAggregationInput[]
    by: GameScalarFieldEnum[] | GameScalarFieldEnum
    having?: GameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameCountAggregateInputType | true
    _avg?: GameAvgAggregateInputType
    _sum?: GameSumAggregateInputType
    _min?: GameMinAggregateInputType
    _max?: GameMaxAggregateInputType
  }

  export type GameGroupByOutputType = {
    id: number
    name: string
    description: string | null
    appKey: string | null
    token: string | null
    status: string
    config: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: GameCountAggregateOutputType | null
    _avg: GameAvgAggregateOutputType | null
    _sum: GameSumAggregateOutputType | null
    _min: GameMinAggregateOutputType | null
    _max: GameMaxAggregateOutputType | null
  }

  type GetGameGroupByPayload<T extends GameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameGroupByOutputType[P]>
            : GetScalarType<T[P], GameGroupByOutputType[P]>
        }
      >
    >


  export type GameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    appKey?: boolean
    token?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["game"]>



  export type GameSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    appKey?: boolean
    token?: boolean
    status?: boolean
    config?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "appKey" | "token" | "status" | "config" | "createdAt" | "updatedAt", ExtArgs["result"]["game"]>

  export type $GamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Game"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string | null
      appKey: string | null
      token: string | null
      status: string
      config: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["game"]>
    composites: {}
  }

  type GameGetPayload<S extends boolean | null | undefined | GameDefaultArgs> = $Result.GetResult<Prisma.$GamePayload, S>

  type GameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameCountAggregateInputType | true
    }

  export interface GameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Game'], meta: { name: 'Game' } }
    /**
     * Find zero or one Game that matches the filter.
     * @param {GameFindUniqueArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameFindUniqueArgs>(args: SelectSubset<T, GameFindUniqueArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Game that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameFindUniqueOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameFindUniqueOrThrowArgs>(args: SelectSubset<T, GameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameFindFirstArgs>(args?: SelectSubset<T, GameFindFirstArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Game that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindFirstOrThrowArgs} args - Arguments to find a Game
     * @example
     * // Get one Game
     * const game = await prisma.game.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameFindFirstOrThrowArgs>(args?: SelectSubset<T, GameFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Games that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Games
     * const games = await prisma.game.findMany()
     * 
     * // Get first 10 Games
     * const games = await prisma.game.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameWithIdOnly = await prisma.game.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameFindManyArgs>(args?: SelectSubset<T, GameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Game.
     * @param {GameCreateArgs} args - Arguments to create a Game.
     * @example
     * // Create one Game
     * const Game = await prisma.game.create({
     *   data: {
     *     // ... data to create a Game
     *   }
     * })
     * 
     */
    create<T extends GameCreateArgs>(args: SelectSubset<T, GameCreateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Games.
     * @param {GameCreateManyArgs} args - Arguments to create many Games.
     * @example
     * // Create many Games
     * const game = await prisma.game.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameCreateManyArgs>(args?: SelectSubset<T, GameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Game.
     * @param {GameDeleteArgs} args - Arguments to delete one Game.
     * @example
     * // Delete one Game
     * const Game = await prisma.game.delete({
     *   where: {
     *     // ... filter to delete one Game
     *   }
     * })
     * 
     */
    delete<T extends GameDeleteArgs>(args: SelectSubset<T, GameDeleteArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Game.
     * @param {GameUpdateArgs} args - Arguments to update one Game.
     * @example
     * // Update one Game
     * const game = await prisma.game.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameUpdateArgs>(args: SelectSubset<T, GameUpdateArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Games.
     * @param {GameDeleteManyArgs} args - Arguments to filter Games to delete.
     * @example
     * // Delete a few Games
     * const { count } = await prisma.game.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameDeleteManyArgs>(args?: SelectSubset<T, GameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Games
     * const game = await prisma.game.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameUpdateManyArgs>(args: SelectSubset<T, GameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Game.
     * @param {GameUpsertArgs} args - Arguments to update or create a Game.
     * @example
     * // Update or create a Game
     * const game = await prisma.game.upsert({
     *   create: {
     *     // ... data to create a Game
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Game we want to update
     *   }
     * })
     */
    upsert<T extends GameUpsertArgs>(args: SelectSubset<T, GameUpsertArgs<ExtArgs>>): Prisma__GameClient<$Result.GetResult<Prisma.$GamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Games.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameCountArgs} args - Arguments to filter Games to count.
     * @example
     * // Count the number of Games
     * const count = await prisma.game.count({
     *   where: {
     *     // ... the filter for the Games we want to count
     *   }
     * })
    **/
    count<T extends GameCountArgs>(
      args?: Subset<T, GameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameAggregateArgs>(args: Subset<T, GameAggregateArgs>): Prisma.PrismaPromise<GetGameAggregateType<T>>

    /**
     * Group by Game.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameGroupByArgs['orderBy'] }
        : { orderBy?: GameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Game model
   */
  readonly fields: GameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Game.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Game model
   */
  interface GameFieldRefs {
    readonly id: FieldRef<"Game", 'Int'>
    readonly name: FieldRef<"Game", 'String'>
    readonly description: FieldRef<"Game", 'String'>
    readonly appKey: FieldRef<"Game", 'String'>
    readonly token: FieldRef<"Game", 'String'>
    readonly status: FieldRef<"Game", 'String'>
    readonly config: FieldRef<"Game", 'Json'>
    readonly createdAt: FieldRef<"Game", 'DateTime'>
    readonly updatedAt: FieldRef<"Game", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Game findUnique
   */
  export type GameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findUniqueOrThrow
   */
  export type GameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game findFirst
   */
  export type GameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findFirstOrThrow
   */
  export type GameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Game to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Games.
     */
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game findMany
   */
  export type GameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter, which Games to fetch.
     */
    where?: GameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Games to fetch.
     */
    orderBy?: GameOrderByWithRelationInput | GameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Games.
     */
    cursor?: GameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Games from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Games.
     */
    skip?: number
    distinct?: GameScalarFieldEnum | GameScalarFieldEnum[]
  }

  /**
   * Game create
   */
  export type GameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data needed to create a Game.
     */
    data: XOR<GameCreateInput, GameUncheckedCreateInput>
  }

  /**
   * Game createMany
   */
  export type GameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Games.
     */
    data: GameCreateManyInput | GameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Game update
   */
  export type GameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The data needed to update a Game.
     */
    data: XOR<GameUpdateInput, GameUncheckedUpdateInput>
    /**
     * Choose, which Game to update.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game updateMany
   */
  export type GameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Games.
     */
    data: XOR<GameUpdateManyMutationInput, GameUncheckedUpdateManyInput>
    /**
     * Filter which Games to update
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to update.
     */
    limit?: number
  }

  /**
   * Game upsert
   */
  export type GameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * The filter to search for the Game to update in case it exists.
     */
    where: GameWhereUniqueInput
    /**
     * In case the Game found by the `where` argument doesn't exist, create a new Game with this data.
     */
    create: XOR<GameCreateInput, GameUncheckedCreateInput>
    /**
     * In case the Game was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameUpdateInput, GameUncheckedUpdateInput>
  }

  /**
   * Game delete
   */
  export type GameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
    /**
     * Filter which Game to delete.
     */
    where: GameWhereUniqueInput
  }

  /**
   * Game deleteMany
   */
  export type GameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Games to delete
     */
    where?: GameWhereInput
    /**
     * Limit how many Games to delete.
     */
    limit?: number
  }

  /**
   * Game without action
   */
  export type GameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Game
     */
    select?: GameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Game
     */
    omit?: GameOmit<ExtArgs> | null
  }


  /**
   * Model Bet
   */

  export type AggregateBet = {
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  export type BetAvgAggregateOutputType = {
    id: number | null
    gameId: number | null
    bet: number | null
    type: number | null
  }

  export type BetSumAggregateOutputType = {
    id: number | null
    gameId: number | null
    bet: number | null
    type: number | null
  }

  export type BetMinAggregateOutputType = {
    id: number | null
    gameId: number | null
    userId: string | null
    bet: number | null
    type: number | null
    appKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BetMaxAggregateOutputType = {
    id: number | null
    gameId: number | null
    userId: string | null
    bet: number | null
    type: number | null
    appKey: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type BetCountAggregateOutputType = {
    id: number
    gameId: number
    userId: number
    bet: number
    type: number
    appKey: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type BetAvgAggregateInputType = {
    id?: true
    gameId?: true
    bet?: true
    type?: true
  }

  export type BetSumAggregateInputType = {
    id?: true
    gameId?: true
    bet?: true
    type?: true
  }

  export type BetMinAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    bet?: true
    type?: true
    appKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BetMaxAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    bet?: true
    type?: true
    appKey?: true
    createdAt?: true
    updatedAt?: true
  }

  export type BetCountAggregateInputType = {
    id?: true
    gameId?: true
    userId?: true
    bet?: true
    type?: true
    appKey?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type BetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bet to aggregate.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bets
    **/
    _count?: true | BetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BetMaxAggregateInputType
  }

  export type GetBetAggregateType<T extends BetAggregateArgs> = {
        [P in keyof T & keyof AggregateBet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBet[P]>
      : GetScalarType<T[P], AggregateBet[P]>
  }




  export type BetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BetWhereInput
    orderBy?: BetOrderByWithAggregationInput | BetOrderByWithAggregationInput[]
    by: BetScalarFieldEnum[] | BetScalarFieldEnum
    having?: BetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BetCountAggregateInputType | true
    _avg?: BetAvgAggregateInputType
    _sum?: BetSumAggregateInputType
    _min?: BetMinAggregateInputType
    _max?: BetMaxAggregateInputType
  }

  export type BetGroupByOutputType = {
    id: number
    gameId: number
    userId: string | null
    bet: number | null
    type: number | null
    appKey: string | null
    createdAt: Date
    updatedAt: Date
    _count: BetCountAggregateOutputType | null
    _avg: BetAvgAggregateOutputType | null
    _sum: BetSumAggregateOutputType | null
    _min: BetMinAggregateOutputType | null
    _max: BetMaxAggregateOutputType | null
  }

  type GetBetGroupByPayload<T extends BetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BetGroupByOutputType[P]>
            : GetScalarType<T[P], BetGroupByOutputType[P]>
        }
      >
    >


  export type BetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    gameId?: boolean
    userId?: boolean
    bet?: boolean
    type?: boolean
    appKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["bet"]>



  export type BetSelectScalar = {
    id?: boolean
    gameId?: boolean
    userId?: boolean
    bet?: boolean
    type?: boolean
    appKey?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type BetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "gameId" | "userId" | "bet" | "type" | "appKey" | "createdAt" | "updatedAt", ExtArgs["result"]["bet"]>

  export type $BetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bet"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      gameId: number
      userId: string | null
      bet: number | null
      type: number | null
      appKey: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["bet"]>
    composites: {}
  }

  type BetGetPayload<S extends boolean | null | undefined | BetDefaultArgs> = $Result.GetResult<Prisma.$BetPayload, S>

  type BetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BetCountAggregateInputType | true
    }

  export interface BetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bet'], meta: { name: 'Bet' } }
    /**
     * Find zero or one Bet that matches the filter.
     * @param {BetFindUniqueArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BetFindUniqueArgs>(args: SelectSubset<T, BetFindUniqueArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Bet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BetFindUniqueOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BetFindUniqueOrThrowArgs>(args: SelectSubset<T, BetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BetFindFirstArgs>(args?: SelectSubset<T, BetFindFirstArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Bet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindFirstOrThrowArgs} args - Arguments to find a Bet
     * @example
     * // Get one Bet
     * const bet = await prisma.bet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BetFindFirstOrThrowArgs>(args?: SelectSubset<T, BetFindFirstOrThrowArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Bets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bets
     * const bets = await prisma.bet.findMany()
     * 
     * // Get first 10 Bets
     * const bets = await prisma.bet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const betWithIdOnly = await prisma.bet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BetFindManyArgs>(args?: SelectSubset<T, BetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Bet.
     * @param {BetCreateArgs} args - Arguments to create a Bet.
     * @example
     * // Create one Bet
     * const Bet = await prisma.bet.create({
     *   data: {
     *     // ... data to create a Bet
     *   }
     * })
     * 
     */
    create<T extends BetCreateArgs>(args: SelectSubset<T, BetCreateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Bets.
     * @param {BetCreateManyArgs} args - Arguments to create many Bets.
     * @example
     * // Create many Bets
     * const bet = await prisma.bet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BetCreateManyArgs>(args?: SelectSubset<T, BetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bet.
     * @param {BetDeleteArgs} args - Arguments to delete one Bet.
     * @example
     * // Delete one Bet
     * const Bet = await prisma.bet.delete({
     *   where: {
     *     // ... filter to delete one Bet
     *   }
     * })
     * 
     */
    delete<T extends BetDeleteArgs>(args: SelectSubset<T, BetDeleteArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Bet.
     * @param {BetUpdateArgs} args - Arguments to update one Bet.
     * @example
     * // Update one Bet
     * const bet = await prisma.bet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BetUpdateArgs>(args: SelectSubset<T, BetUpdateArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Bets.
     * @param {BetDeleteManyArgs} args - Arguments to filter Bets to delete.
     * @example
     * // Delete a few Bets
     * const { count } = await prisma.bet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BetDeleteManyArgs>(args?: SelectSubset<T, BetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bets
     * const bet = await prisma.bet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BetUpdateManyArgs>(args: SelectSubset<T, BetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bet.
     * @param {BetUpsertArgs} args - Arguments to update or create a Bet.
     * @example
     * // Update or create a Bet
     * const bet = await prisma.bet.upsert({
     *   create: {
     *     // ... data to create a Bet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bet we want to update
     *   }
     * })
     */
    upsert<T extends BetUpsertArgs>(args: SelectSubset<T, BetUpsertArgs<ExtArgs>>): Prisma__BetClient<$Result.GetResult<Prisma.$BetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Bets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetCountArgs} args - Arguments to filter Bets to count.
     * @example
     * // Count the number of Bets
     * const count = await prisma.bet.count({
     *   where: {
     *     // ... the filter for the Bets we want to count
     *   }
     * })
    **/
    count<T extends BetCountArgs>(
      args?: Subset<T, BetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BetAggregateArgs>(args: Subset<T, BetAggregateArgs>): Prisma.PrismaPromise<GetBetAggregateType<T>>

    /**
     * Group by Bet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BetGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends BetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BetGroupByArgs['orderBy'] }
        : { orderBy?: BetGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, BetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bet model
   */
  readonly fields: BetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Bet model
   */
  interface BetFieldRefs {
    readonly id: FieldRef<"Bet", 'Int'>
    readonly gameId: FieldRef<"Bet", 'Int'>
    readonly userId: FieldRef<"Bet", 'String'>
    readonly bet: FieldRef<"Bet", 'Int'>
    readonly type: FieldRef<"Bet", 'Int'>
    readonly appKey: FieldRef<"Bet", 'String'>
    readonly createdAt: FieldRef<"Bet", 'DateTime'>
    readonly updatedAt: FieldRef<"Bet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Bet findUnique
   */
  export type BetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findUniqueOrThrow
   */
  export type BetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet findFirst
   */
  export type BetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findFirstOrThrow
   */
  export type BetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bet to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bets.
     */
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet findMany
   */
  export type BetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter, which Bets to fetch.
     */
    where?: BetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bets to fetch.
     */
    orderBy?: BetOrderByWithRelationInput | BetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bets.
     */
    cursor?: BetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bets.
     */
    skip?: number
    distinct?: BetScalarFieldEnum | BetScalarFieldEnum[]
  }

  /**
   * Bet create
   */
  export type BetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data needed to create a Bet.
     */
    data: XOR<BetCreateInput, BetUncheckedCreateInput>
  }

  /**
   * Bet createMany
   */
  export type BetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bets.
     */
    data: BetCreateManyInput | BetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Bet update
   */
  export type BetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The data needed to update a Bet.
     */
    data: XOR<BetUpdateInput, BetUncheckedUpdateInput>
    /**
     * Choose, which Bet to update.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet updateMany
   */
  export type BetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bets.
     */
    data: XOR<BetUpdateManyMutationInput, BetUncheckedUpdateManyInput>
    /**
     * Filter which Bets to update
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to update.
     */
    limit?: number
  }

  /**
   * Bet upsert
   */
  export type BetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * The filter to search for the Bet to update in case it exists.
     */
    where: BetWhereUniqueInput
    /**
     * In case the Bet found by the `where` argument doesn't exist, create a new Bet with this data.
     */
    create: XOR<BetCreateInput, BetUncheckedCreateInput>
    /**
     * In case the Bet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BetUpdateInput, BetUncheckedUpdateInput>
  }

  /**
   * Bet delete
   */
  export type BetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
    /**
     * Filter which Bet to delete.
     */
    where: BetWhereUniqueInput
  }

  /**
   * Bet deleteMany
   */
  export type BetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bets to delete
     */
    where?: BetWhereInput
    /**
     * Limit how many Bets to delete.
     */
    limit?: number
  }

  /**
   * Bet without action
   */
  export type BetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bet
     */
    select?: BetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Bet
     */
    omit?: BetOmit<ExtArgs> | null
  }


  /**
   * Model GameOngoingUsers
   */

  export type AggregateGameOngoingUsers = {
    _count: GameOngoingUsersCountAggregateOutputType | null
    _avg: GameOngoingUsersAvgAggregateOutputType | null
    _sum: GameOngoingUsersSumAggregateOutputType | null
    _min: GameOngoingUsersMinAggregateOutputType | null
    _max: GameOngoingUsersMaxAggregateOutputType | null
  }

  export type GameOngoingUsersAvgAggregateOutputType = {
    id: number | null
    totalGamePlayed: number | null
    gameWon: number | null
    gameLost: number | null
  }

  export type GameOngoingUsersSumAggregateOutputType = {
    id: number | null
    totalGamePlayed: number | null
    gameWon: number | null
    gameLost: number | null
  }

  export type GameOngoingUsersMinAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    balance: string | null
    appKey: string | null
    token: string | null
    connectionUserId: string | null
    socketId: string | null
    profilePicture: string | null
    totalGamePlayed: number | null
    gameWon: number | null
    gameLost: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameOngoingUsersMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    name: string | null
    balance: string | null
    appKey: string | null
    token: string | null
    connectionUserId: string | null
    socketId: string | null
    profilePicture: string | null
    totalGamePlayed: number | null
    gameWon: number | null
    gameLost: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GameOngoingUsersCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    balance: number
    appKey: number
    token: number
    connectionUserId: number
    socketId: number
    profilePicture: number
    totalGamePlayed: number
    gameWon: number
    gameLost: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GameOngoingUsersAvgAggregateInputType = {
    id?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
  }

  export type GameOngoingUsersSumAggregateInputType = {
    id?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
  }

  export type GameOngoingUsersMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    balance?: true
    appKey?: true
    token?: true
    connectionUserId?: true
    socketId?: true
    profilePicture?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameOngoingUsersMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    balance?: true
    appKey?: true
    token?: true
    connectionUserId?: true
    socketId?: true
    profilePicture?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GameOngoingUsersCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    balance?: true
    appKey?: true
    token?: true
    connectionUserId?: true
    socketId?: true
    profilePicture?: true
    totalGamePlayed?: true
    gameWon?: true
    gameLost?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GameOngoingUsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameOngoingUsers to aggregate.
     */
    where?: GameOngoingUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameOngoingUsers to fetch.
     */
    orderBy?: GameOngoingUsersOrderByWithRelationInput | GameOngoingUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GameOngoingUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameOngoingUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameOngoingUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GameOngoingUsers
    **/
    _count?: true | GameOngoingUsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GameOngoingUsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GameOngoingUsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GameOngoingUsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GameOngoingUsersMaxAggregateInputType
  }

  export type GetGameOngoingUsersAggregateType<T extends GameOngoingUsersAggregateArgs> = {
        [P in keyof T & keyof AggregateGameOngoingUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGameOngoingUsers[P]>
      : GetScalarType<T[P], AggregateGameOngoingUsers[P]>
  }




  export type GameOngoingUsersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GameOngoingUsersWhereInput
    orderBy?: GameOngoingUsersOrderByWithAggregationInput | GameOngoingUsersOrderByWithAggregationInput[]
    by: GameOngoingUsersScalarFieldEnum[] | GameOngoingUsersScalarFieldEnum
    having?: GameOngoingUsersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GameOngoingUsersCountAggregateInputType | true
    _avg?: GameOngoingUsersAvgAggregateInputType
    _sum?: GameOngoingUsersSumAggregateInputType
    _min?: GameOngoingUsersMinAggregateInputType
    _max?: GameOngoingUsersMaxAggregateInputType
  }

  export type GameOngoingUsersGroupByOutputType = {
    id: number
    userId: string
    name: string | null
    balance: string | null
    appKey: string | null
    token: string | null
    connectionUserId: string | null
    socketId: string | null
    profilePicture: string | null
    totalGamePlayed: number
    gameWon: number
    gameLost: number
    createdAt: Date
    updatedAt: Date
    _count: GameOngoingUsersCountAggregateOutputType | null
    _avg: GameOngoingUsersAvgAggregateOutputType | null
    _sum: GameOngoingUsersSumAggregateOutputType | null
    _min: GameOngoingUsersMinAggregateOutputType | null
    _max: GameOngoingUsersMaxAggregateOutputType | null
  }

  type GetGameOngoingUsersGroupByPayload<T extends GameOngoingUsersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GameOngoingUsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GameOngoingUsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GameOngoingUsersGroupByOutputType[P]>
            : GetScalarType<T[P], GameOngoingUsersGroupByOutputType[P]>
        }
      >
    >


  export type GameOngoingUsersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    balance?: boolean
    appKey?: boolean
    token?: boolean
    connectionUserId?: boolean
    socketId?: boolean
    profilePicture?: boolean
    totalGamePlayed?: boolean
    gameWon?: boolean
    gameLost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["gameOngoingUsers"]>



  export type GameOngoingUsersSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    balance?: boolean
    appKey?: boolean
    token?: boolean
    connectionUserId?: boolean
    socketId?: boolean
    profilePicture?: boolean
    totalGamePlayed?: boolean
    gameWon?: boolean
    gameLost?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GameOngoingUsersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "balance" | "appKey" | "token" | "connectionUserId" | "socketId" | "profilePicture" | "totalGamePlayed" | "gameWon" | "gameLost" | "createdAt" | "updatedAt", ExtArgs["result"]["gameOngoingUsers"]>

  export type $GameOngoingUsersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GameOngoingUsers"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      name: string | null
      balance: string | null
      appKey: string | null
      token: string | null
      connectionUserId: string | null
      socketId: string | null
      profilePicture: string | null
      totalGamePlayed: number
      gameWon: number
      gameLost: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gameOngoingUsers"]>
    composites: {}
  }

  type GameOngoingUsersGetPayload<S extends boolean | null | undefined | GameOngoingUsersDefaultArgs> = $Result.GetResult<Prisma.$GameOngoingUsersPayload, S>

  type GameOngoingUsersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GameOngoingUsersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GameOngoingUsersCountAggregateInputType | true
    }

  export interface GameOngoingUsersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GameOngoingUsers'], meta: { name: 'GameOngoingUsers' } }
    /**
     * Find zero or one GameOngoingUsers that matches the filter.
     * @param {GameOngoingUsersFindUniqueArgs} args - Arguments to find a GameOngoingUsers
     * @example
     * // Get one GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GameOngoingUsersFindUniqueArgs>(args: SelectSubset<T, GameOngoingUsersFindUniqueArgs<ExtArgs>>): Prisma__GameOngoingUsersClient<$Result.GetResult<Prisma.$GameOngoingUsersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GameOngoingUsers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GameOngoingUsersFindUniqueOrThrowArgs} args - Arguments to find a GameOngoingUsers
     * @example
     * // Get one GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GameOngoingUsersFindUniqueOrThrowArgs>(args: SelectSubset<T, GameOngoingUsersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GameOngoingUsersClient<$Result.GetResult<Prisma.$GameOngoingUsersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameOngoingUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameOngoingUsersFindFirstArgs} args - Arguments to find a GameOngoingUsers
     * @example
     * // Get one GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GameOngoingUsersFindFirstArgs>(args?: SelectSubset<T, GameOngoingUsersFindFirstArgs<ExtArgs>>): Prisma__GameOngoingUsersClient<$Result.GetResult<Prisma.$GameOngoingUsersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GameOngoingUsers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameOngoingUsersFindFirstOrThrowArgs} args - Arguments to find a GameOngoingUsers
     * @example
     * // Get one GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GameOngoingUsersFindFirstOrThrowArgs>(args?: SelectSubset<T, GameOngoingUsersFindFirstOrThrowArgs<ExtArgs>>): Prisma__GameOngoingUsersClient<$Result.GetResult<Prisma.$GameOngoingUsersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GameOngoingUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameOngoingUsersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.findMany()
     * 
     * // Get first 10 GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gameOngoingUsersWithIdOnly = await prisma.gameOngoingUsers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GameOngoingUsersFindManyArgs>(args?: SelectSubset<T, GameOngoingUsersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GameOngoingUsersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GameOngoingUsers.
     * @param {GameOngoingUsersCreateArgs} args - Arguments to create a GameOngoingUsers.
     * @example
     * // Create one GameOngoingUsers
     * const GameOngoingUsers = await prisma.gameOngoingUsers.create({
     *   data: {
     *     // ... data to create a GameOngoingUsers
     *   }
     * })
     * 
     */
    create<T extends GameOngoingUsersCreateArgs>(args: SelectSubset<T, GameOngoingUsersCreateArgs<ExtArgs>>): Prisma__GameOngoingUsersClient<$Result.GetResult<Prisma.$GameOngoingUsersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GameOngoingUsers.
     * @param {GameOngoingUsersCreateManyArgs} args - Arguments to create many GameOngoingUsers.
     * @example
     * // Create many GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GameOngoingUsersCreateManyArgs>(args?: SelectSubset<T, GameOngoingUsersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GameOngoingUsers.
     * @param {GameOngoingUsersDeleteArgs} args - Arguments to delete one GameOngoingUsers.
     * @example
     * // Delete one GameOngoingUsers
     * const GameOngoingUsers = await prisma.gameOngoingUsers.delete({
     *   where: {
     *     // ... filter to delete one GameOngoingUsers
     *   }
     * })
     * 
     */
    delete<T extends GameOngoingUsersDeleteArgs>(args: SelectSubset<T, GameOngoingUsersDeleteArgs<ExtArgs>>): Prisma__GameOngoingUsersClient<$Result.GetResult<Prisma.$GameOngoingUsersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GameOngoingUsers.
     * @param {GameOngoingUsersUpdateArgs} args - Arguments to update one GameOngoingUsers.
     * @example
     * // Update one GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GameOngoingUsersUpdateArgs>(args: SelectSubset<T, GameOngoingUsersUpdateArgs<ExtArgs>>): Prisma__GameOngoingUsersClient<$Result.GetResult<Prisma.$GameOngoingUsersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GameOngoingUsers.
     * @param {GameOngoingUsersDeleteManyArgs} args - Arguments to filter GameOngoingUsers to delete.
     * @example
     * // Delete a few GameOngoingUsers
     * const { count } = await prisma.gameOngoingUsers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GameOngoingUsersDeleteManyArgs>(args?: SelectSubset<T, GameOngoingUsersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GameOngoingUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameOngoingUsersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GameOngoingUsersUpdateManyArgs>(args: SelectSubset<T, GameOngoingUsersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GameOngoingUsers.
     * @param {GameOngoingUsersUpsertArgs} args - Arguments to update or create a GameOngoingUsers.
     * @example
     * // Update or create a GameOngoingUsers
     * const gameOngoingUsers = await prisma.gameOngoingUsers.upsert({
     *   create: {
     *     // ... data to create a GameOngoingUsers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GameOngoingUsers we want to update
     *   }
     * })
     */
    upsert<T extends GameOngoingUsersUpsertArgs>(args: SelectSubset<T, GameOngoingUsersUpsertArgs<ExtArgs>>): Prisma__GameOngoingUsersClient<$Result.GetResult<Prisma.$GameOngoingUsersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GameOngoingUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameOngoingUsersCountArgs} args - Arguments to filter GameOngoingUsers to count.
     * @example
     * // Count the number of GameOngoingUsers
     * const count = await prisma.gameOngoingUsers.count({
     *   where: {
     *     // ... the filter for the GameOngoingUsers we want to count
     *   }
     * })
    **/
    count<T extends GameOngoingUsersCountArgs>(
      args?: Subset<T, GameOngoingUsersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GameOngoingUsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GameOngoingUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameOngoingUsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GameOngoingUsersAggregateArgs>(args: Subset<T, GameOngoingUsersAggregateArgs>): Prisma.PrismaPromise<GetGameOngoingUsersAggregateType<T>>

    /**
     * Group by GameOngoingUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GameOngoingUsersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GameOngoingUsersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GameOngoingUsersGroupByArgs['orderBy'] }
        : { orderBy?: GameOngoingUsersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GameOngoingUsersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGameOngoingUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GameOngoingUsers model
   */
  readonly fields: GameOngoingUsersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GameOngoingUsers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GameOngoingUsersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the GameOngoingUsers model
   */
  interface GameOngoingUsersFieldRefs {
    readonly id: FieldRef<"GameOngoingUsers", 'Int'>
    readonly userId: FieldRef<"GameOngoingUsers", 'String'>
    readonly name: FieldRef<"GameOngoingUsers", 'String'>
    readonly balance: FieldRef<"GameOngoingUsers", 'String'>
    readonly appKey: FieldRef<"GameOngoingUsers", 'String'>
    readonly token: FieldRef<"GameOngoingUsers", 'String'>
    readonly connectionUserId: FieldRef<"GameOngoingUsers", 'String'>
    readonly socketId: FieldRef<"GameOngoingUsers", 'String'>
    readonly profilePicture: FieldRef<"GameOngoingUsers", 'String'>
    readonly totalGamePlayed: FieldRef<"GameOngoingUsers", 'Int'>
    readonly gameWon: FieldRef<"GameOngoingUsers", 'Int'>
    readonly gameLost: FieldRef<"GameOngoingUsers", 'Int'>
    readonly createdAt: FieldRef<"GameOngoingUsers", 'DateTime'>
    readonly updatedAt: FieldRef<"GameOngoingUsers", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GameOngoingUsers findUnique
   */
  export type GameOngoingUsersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
    /**
     * Filter, which GameOngoingUsers to fetch.
     */
    where: GameOngoingUsersWhereUniqueInput
  }

  /**
   * GameOngoingUsers findUniqueOrThrow
   */
  export type GameOngoingUsersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
    /**
     * Filter, which GameOngoingUsers to fetch.
     */
    where: GameOngoingUsersWhereUniqueInput
  }

  /**
   * GameOngoingUsers findFirst
   */
  export type GameOngoingUsersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
    /**
     * Filter, which GameOngoingUsers to fetch.
     */
    where?: GameOngoingUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameOngoingUsers to fetch.
     */
    orderBy?: GameOngoingUsersOrderByWithRelationInput | GameOngoingUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameOngoingUsers.
     */
    cursor?: GameOngoingUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameOngoingUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameOngoingUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameOngoingUsers.
     */
    distinct?: GameOngoingUsersScalarFieldEnum | GameOngoingUsersScalarFieldEnum[]
  }

  /**
   * GameOngoingUsers findFirstOrThrow
   */
  export type GameOngoingUsersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
    /**
     * Filter, which GameOngoingUsers to fetch.
     */
    where?: GameOngoingUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameOngoingUsers to fetch.
     */
    orderBy?: GameOngoingUsersOrderByWithRelationInput | GameOngoingUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GameOngoingUsers.
     */
    cursor?: GameOngoingUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameOngoingUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameOngoingUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GameOngoingUsers.
     */
    distinct?: GameOngoingUsersScalarFieldEnum | GameOngoingUsersScalarFieldEnum[]
  }

  /**
   * GameOngoingUsers findMany
   */
  export type GameOngoingUsersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
    /**
     * Filter, which GameOngoingUsers to fetch.
     */
    where?: GameOngoingUsersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GameOngoingUsers to fetch.
     */
    orderBy?: GameOngoingUsersOrderByWithRelationInput | GameOngoingUsersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GameOngoingUsers.
     */
    cursor?: GameOngoingUsersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GameOngoingUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GameOngoingUsers.
     */
    skip?: number
    distinct?: GameOngoingUsersScalarFieldEnum | GameOngoingUsersScalarFieldEnum[]
  }

  /**
   * GameOngoingUsers create
   */
  export type GameOngoingUsersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
    /**
     * The data needed to create a GameOngoingUsers.
     */
    data: XOR<GameOngoingUsersCreateInput, GameOngoingUsersUncheckedCreateInput>
  }

  /**
   * GameOngoingUsers createMany
   */
  export type GameOngoingUsersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GameOngoingUsers.
     */
    data: GameOngoingUsersCreateManyInput | GameOngoingUsersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GameOngoingUsers update
   */
  export type GameOngoingUsersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
    /**
     * The data needed to update a GameOngoingUsers.
     */
    data: XOR<GameOngoingUsersUpdateInput, GameOngoingUsersUncheckedUpdateInput>
    /**
     * Choose, which GameOngoingUsers to update.
     */
    where: GameOngoingUsersWhereUniqueInput
  }

  /**
   * GameOngoingUsers updateMany
   */
  export type GameOngoingUsersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GameOngoingUsers.
     */
    data: XOR<GameOngoingUsersUpdateManyMutationInput, GameOngoingUsersUncheckedUpdateManyInput>
    /**
     * Filter which GameOngoingUsers to update
     */
    where?: GameOngoingUsersWhereInput
    /**
     * Limit how many GameOngoingUsers to update.
     */
    limit?: number
  }

  /**
   * GameOngoingUsers upsert
   */
  export type GameOngoingUsersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
    /**
     * The filter to search for the GameOngoingUsers to update in case it exists.
     */
    where: GameOngoingUsersWhereUniqueInput
    /**
     * In case the GameOngoingUsers found by the `where` argument doesn't exist, create a new GameOngoingUsers with this data.
     */
    create: XOR<GameOngoingUsersCreateInput, GameOngoingUsersUncheckedCreateInput>
    /**
     * In case the GameOngoingUsers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GameOngoingUsersUpdateInput, GameOngoingUsersUncheckedUpdateInput>
  }

  /**
   * GameOngoingUsers delete
   */
  export type GameOngoingUsersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
    /**
     * Filter which GameOngoingUsers to delete.
     */
    where: GameOngoingUsersWhereUniqueInput
  }

  /**
   * GameOngoingUsers deleteMany
   */
  export type GameOngoingUsersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GameOngoingUsers to delete
     */
    where?: GameOngoingUsersWhereInput
    /**
     * Limit how many GameOngoingUsers to delete.
     */
    limit?: number
  }

  /**
   * GameOngoingUsers without action
   */
  export type GameOngoingUsersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GameOngoingUsers
     */
    select?: GameOngoingUsersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GameOngoingUsers
     */
    omit?: GameOngoingUsersOmit<ExtArgs> | null
  }


  /**
   * Model OngoingTeenpattiGame
   */

  export type AggregateOngoingTeenpattiGame = {
    _count: OngoingTeenpattiGameCountAggregateOutputType | null
    _avg: OngoingTeenpattiGameAvgAggregateOutputType | null
    _sum: OngoingTeenpattiGameSumAggregateOutputType | null
    _min: OngoingTeenpattiGameMinAggregateOutputType | null
    _max: OngoingTeenpattiGameMaxAggregateOutputType | null
  }

  export type OngoingTeenpattiGameAvgAggregateOutputType = {
    id: number | null
    potIndex: number | null
    amount: number | null
    type: number | null
  }

  export type OngoingTeenpattiGameSumAggregateOutputType = {
    id: number | null
    potIndex: number | null
    amount: number | null
    type: number | null
  }

  export type OngoingTeenpattiGameMinAggregateOutputType = {
    id: number | null
    potIndex: number | null
    potName: string | null
    appKey: string | null
    userId: string | null
    amount: number | null
    type: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OngoingTeenpattiGameMaxAggregateOutputType = {
    id: number | null
    potIndex: number | null
    potName: string | null
    appKey: string | null
    userId: string | null
    amount: number | null
    type: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OngoingTeenpattiGameCountAggregateOutputType = {
    id: number
    potIndex: number
    potName: number
    appKey: number
    userId: number
    amount: number
    type: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OngoingTeenpattiGameAvgAggregateInputType = {
    id?: true
    potIndex?: true
    amount?: true
    type?: true
  }

  export type OngoingTeenpattiGameSumAggregateInputType = {
    id?: true
    potIndex?: true
    amount?: true
    type?: true
  }

  export type OngoingTeenpattiGameMinAggregateInputType = {
    id?: true
    potIndex?: true
    potName?: true
    appKey?: true
    userId?: true
    amount?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OngoingTeenpattiGameMaxAggregateInputType = {
    id?: true
    potIndex?: true
    potName?: true
    appKey?: true
    userId?: true
    amount?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OngoingTeenpattiGameCountAggregateInputType = {
    id?: true
    potIndex?: true
    potName?: true
    appKey?: true
    userId?: true
    amount?: true
    type?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OngoingTeenpattiGameAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OngoingTeenpattiGame to aggregate.
     */
    where?: OngoingTeenpattiGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OngoingTeenpattiGames to fetch.
     */
    orderBy?: OngoingTeenpattiGameOrderByWithRelationInput | OngoingTeenpattiGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OngoingTeenpattiGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OngoingTeenpattiGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OngoingTeenpattiGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OngoingTeenpattiGames
    **/
    _count?: true | OngoingTeenpattiGameCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OngoingTeenpattiGameAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OngoingTeenpattiGameSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OngoingTeenpattiGameMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OngoingTeenpattiGameMaxAggregateInputType
  }

  export type GetOngoingTeenpattiGameAggregateType<T extends OngoingTeenpattiGameAggregateArgs> = {
        [P in keyof T & keyof AggregateOngoingTeenpattiGame]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOngoingTeenpattiGame[P]>
      : GetScalarType<T[P], AggregateOngoingTeenpattiGame[P]>
  }




  export type OngoingTeenpattiGameGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OngoingTeenpattiGameWhereInput
    orderBy?: OngoingTeenpattiGameOrderByWithAggregationInput | OngoingTeenpattiGameOrderByWithAggregationInput[]
    by: OngoingTeenpattiGameScalarFieldEnum[] | OngoingTeenpattiGameScalarFieldEnum
    having?: OngoingTeenpattiGameScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OngoingTeenpattiGameCountAggregateInputType | true
    _avg?: OngoingTeenpattiGameAvgAggregateInputType
    _sum?: OngoingTeenpattiGameSumAggregateInputType
    _min?: OngoingTeenpattiGameMinAggregateInputType
    _max?: OngoingTeenpattiGameMaxAggregateInputType
  }

  export type OngoingTeenpattiGameGroupByOutputType = {
    id: number
    potIndex: number | null
    potName: string | null
    appKey: string | null
    userId: string | null
    amount: number | null
    type: number | null
    createdAt: Date
    updatedAt: Date
    _count: OngoingTeenpattiGameCountAggregateOutputType | null
    _avg: OngoingTeenpattiGameAvgAggregateOutputType | null
    _sum: OngoingTeenpattiGameSumAggregateOutputType | null
    _min: OngoingTeenpattiGameMinAggregateOutputType | null
    _max: OngoingTeenpattiGameMaxAggregateOutputType | null
  }

  type GetOngoingTeenpattiGameGroupByPayload<T extends OngoingTeenpattiGameGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OngoingTeenpattiGameGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OngoingTeenpattiGameGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OngoingTeenpattiGameGroupByOutputType[P]>
            : GetScalarType<T[P], OngoingTeenpattiGameGroupByOutputType[P]>
        }
      >
    >


  export type OngoingTeenpattiGameSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    potIndex?: boolean
    potName?: boolean
    appKey?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["ongoingTeenpattiGame"]>



  export type OngoingTeenpattiGameSelectScalar = {
    id?: boolean
    potIndex?: boolean
    potName?: boolean
    appKey?: boolean
    userId?: boolean
    amount?: boolean
    type?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OngoingTeenpattiGameOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "potIndex" | "potName" | "appKey" | "userId" | "amount" | "type" | "createdAt" | "updatedAt", ExtArgs["result"]["ongoingTeenpattiGame"]>

  export type $OngoingTeenpattiGamePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OngoingTeenpattiGame"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      potIndex: number | null
      potName: string | null
      appKey: string | null
      userId: string | null
      amount: number | null
      type: number | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["ongoingTeenpattiGame"]>
    composites: {}
  }

  type OngoingTeenpattiGameGetPayload<S extends boolean | null | undefined | OngoingTeenpattiGameDefaultArgs> = $Result.GetResult<Prisma.$OngoingTeenpattiGamePayload, S>

  type OngoingTeenpattiGameCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OngoingTeenpattiGameFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OngoingTeenpattiGameCountAggregateInputType | true
    }

  export interface OngoingTeenpattiGameDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OngoingTeenpattiGame'], meta: { name: 'OngoingTeenpattiGame' } }
    /**
     * Find zero or one OngoingTeenpattiGame that matches the filter.
     * @param {OngoingTeenpattiGameFindUniqueArgs} args - Arguments to find a OngoingTeenpattiGame
     * @example
     * // Get one OngoingTeenpattiGame
     * const ongoingTeenpattiGame = await prisma.ongoingTeenpattiGame.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OngoingTeenpattiGameFindUniqueArgs>(args: SelectSubset<T, OngoingTeenpattiGameFindUniqueArgs<ExtArgs>>): Prisma__OngoingTeenpattiGameClient<$Result.GetResult<Prisma.$OngoingTeenpattiGamePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OngoingTeenpattiGame that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OngoingTeenpattiGameFindUniqueOrThrowArgs} args - Arguments to find a OngoingTeenpattiGame
     * @example
     * // Get one OngoingTeenpattiGame
     * const ongoingTeenpattiGame = await prisma.ongoingTeenpattiGame.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OngoingTeenpattiGameFindUniqueOrThrowArgs>(args: SelectSubset<T, OngoingTeenpattiGameFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OngoingTeenpattiGameClient<$Result.GetResult<Prisma.$OngoingTeenpattiGamePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OngoingTeenpattiGame that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingTeenpattiGameFindFirstArgs} args - Arguments to find a OngoingTeenpattiGame
     * @example
     * // Get one OngoingTeenpattiGame
     * const ongoingTeenpattiGame = await prisma.ongoingTeenpattiGame.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OngoingTeenpattiGameFindFirstArgs>(args?: SelectSubset<T, OngoingTeenpattiGameFindFirstArgs<ExtArgs>>): Prisma__OngoingTeenpattiGameClient<$Result.GetResult<Prisma.$OngoingTeenpattiGamePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OngoingTeenpattiGame that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingTeenpattiGameFindFirstOrThrowArgs} args - Arguments to find a OngoingTeenpattiGame
     * @example
     * // Get one OngoingTeenpattiGame
     * const ongoingTeenpattiGame = await prisma.ongoingTeenpattiGame.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OngoingTeenpattiGameFindFirstOrThrowArgs>(args?: SelectSubset<T, OngoingTeenpattiGameFindFirstOrThrowArgs<ExtArgs>>): Prisma__OngoingTeenpattiGameClient<$Result.GetResult<Prisma.$OngoingTeenpattiGamePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OngoingTeenpattiGames that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingTeenpattiGameFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OngoingTeenpattiGames
     * const ongoingTeenpattiGames = await prisma.ongoingTeenpattiGame.findMany()
     * 
     * // Get first 10 OngoingTeenpattiGames
     * const ongoingTeenpattiGames = await prisma.ongoingTeenpattiGame.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ongoingTeenpattiGameWithIdOnly = await prisma.ongoingTeenpattiGame.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OngoingTeenpattiGameFindManyArgs>(args?: SelectSubset<T, OngoingTeenpattiGameFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OngoingTeenpattiGamePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OngoingTeenpattiGame.
     * @param {OngoingTeenpattiGameCreateArgs} args - Arguments to create a OngoingTeenpattiGame.
     * @example
     * // Create one OngoingTeenpattiGame
     * const OngoingTeenpattiGame = await prisma.ongoingTeenpattiGame.create({
     *   data: {
     *     // ... data to create a OngoingTeenpattiGame
     *   }
     * })
     * 
     */
    create<T extends OngoingTeenpattiGameCreateArgs>(args: SelectSubset<T, OngoingTeenpattiGameCreateArgs<ExtArgs>>): Prisma__OngoingTeenpattiGameClient<$Result.GetResult<Prisma.$OngoingTeenpattiGamePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OngoingTeenpattiGames.
     * @param {OngoingTeenpattiGameCreateManyArgs} args - Arguments to create many OngoingTeenpattiGames.
     * @example
     * // Create many OngoingTeenpattiGames
     * const ongoingTeenpattiGame = await prisma.ongoingTeenpattiGame.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OngoingTeenpattiGameCreateManyArgs>(args?: SelectSubset<T, OngoingTeenpattiGameCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a OngoingTeenpattiGame.
     * @param {OngoingTeenpattiGameDeleteArgs} args - Arguments to delete one OngoingTeenpattiGame.
     * @example
     * // Delete one OngoingTeenpattiGame
     * const OngoingTeenpattiGame = await prisma.ongoingTeenpattiGame.delete({
     *   where: {
     *     // ... filter to delete one OngoingTeenpattiGame
     *   }
     * })
     * 
     */
    delete<T extends OngoingTeenpattiGameDeleteArgs>(args: SelectSubset<T, OngoingTeenpattiGameDeleteArgs<ExtArgs>>): Prisma__OngoingTeenpattiGameClient<$Result.GetResult<Prisma.$OngoingTeenpattiGamePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OngoingTeenpattiGame.
     * @param {OngoingTeenpattiGameUpdateArgs} args - Arguments to update one OngoingTeenpattiGame.
     * @example
     * // Update one OngoingTeenpattiGame
     * const ongoingTeenpattiGame = await prisma.ongoingTeenpattiGame.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OngoingTeenpattiGameUpdateArgs>(args: SelectSubset<T, OngoingTeenpattiGameUpdateArgs<ExtArgs>>): Prisma__OngoingTeenpattiGameClient<$Result.GetResult<Prisma.$OngoingTeenpattiGamePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OngoingTeenpattiGames.
     * @param {OngoingTeenpattiGameDeleteManyArgs} args - Arguments to filter OngoingTeenpattiGames to delete.
     * @example
     * // Delete a few OngoingTeenpattiGames
     * const { count } = await prisma.ongoingTeenpattiGame.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OngoingTeenpattiGameDeleteManyArgs>(args?: SelectSubset<T, OngoingTeenpattiGameDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OngoingTeenpattiGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingTeenpattiGameUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OngoingTeenpattiGames
     * const ongoingTeenpattiGame = await prisma.ongoingTeenpattiGame.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OngoingTeenpattiGameUpdateManyArgs>(args: SelectSubset<T, OngoingTeenpattiGameUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one OngoingTeenpattiGame.
     * @param {OngoingTeenpattiGameUpsertArgs} args - Arguments to update or create a OngoingTeenpattiGame.
     * @example
     * // Update or create a OngoingTeenpattiGame
     * const ongoingTeenpattiGame = await prisma.ongoingTeenpattiGame.upsert({
     *   create: {
     *     // ... data to create a OngoingTeenpattiGame
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OngoingTeenpattiGame we want to update
     *   }
     * })
     */
    upsert<T extends OngoingTeenpattiGameUpsertArgs>(args: SelectSubset<T, OngoingTeenpattiGameUpsertArgs<ExtArgs>>): Prisma__OngoingTeenpattiGameClient<$Result.GetResult<Prisma.$OngoingTeenpattiGamePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OngoingTeenpattiGames.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingTeenpattiGameCountArgs} args - Arguments to filter OngoingTeenpattiGames to count.
     * @example
     * // Count the number of OngoingTeenpattiGames
     * const count = await prisma.ongoingTeenpattiGame.count({
     *   where: {
     *     // ... the filter for the OngoingTeenpattiGames we want to count
     *   }
     * })
    **/
    count<T extends OngoingTeenpattiGameCountArgs>(
      args?: Subset<T, OngoingTeenpattiGameCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OngoingTeenpattiGameCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OngoingTeenpattiGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingTeenpattiGameAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OngoingTeenpattiGameAggregateArgs>(args: Subset<T, OngoingTeenpattiGameAggregateArgs>): Prisma.PrismaPromise<GetOngoingTeenpattiGameAggregateType<T>>

    /**
     * Group by OngoingTeenpattiGame.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OngoingTeenpattiGameGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OngoingTeenpattiGameGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OngoingTeenpattiGameGroupByArgs['orderBy'] }
        : { orderBy?: OngoingTeenpattiGameGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OngoingTeenpattiGameGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOngoingTeenpattiGameGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OngoingTeenpattiGame model
   */
  readonly fields: OngoingTeenpattiGameFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OngoingTeenpattiGame.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OngoingTeenpattiGameClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OngoingTeenpattiGame model
   */
  interface OngoingTeenpattiGameFieldRefs {
    readonly id: FieldRef<"OngoingTeenpattiGame", 'Int'>
    readonly potIndex: FieldRef<"OngoingTeenpattiGame", 'Int'>
    readonly potName: FieldRef<"OngoingTeenpattiGame", 'String'>
    readonly appKey: FieldRef<"OngoingTeenpattiGame", 'String'>
    readonly userId: FieldRef<"OngoingTeenpattiGame", 'String'>
    readonly amount: FieldRef<"OngoingTeenpattiGame", 'Int'>
    readonly type: FieldRef<"OngoingTeenpattiGame", 'Int'>
    readonly createdAt: FieldRef<"OngoingTeenpattiGame", 'DateTime'>
    readonly updatedAt: FieldRef<"OngoingTeenpattiGame", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * OngoingTeenpattiGame findUnique
   */
  export type OngoingTeenpattiGameFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
    /**
     * Filter, which OngoingTeenpattiGame to fetch.
     */
    where: OngoingTeenpattiGameWhereUniqueInput
  }

  /**
   * OngoingTeenpattiGame findUniqueOrThrow
   */
  export type OngoingTeenpattiGameFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
    /**
     * Filter, which OngoingTeenpattiGame to fetch.
     */
    where: OngoingTeenpattiGameWhereUniqueInput
  }

  /**
   * OngoingTeenpattiGame findFirst
   */
  export type OngoingTeenpattiGameFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
    /**
     * Filter, which OngoingTeenpattiGame to fetch.
     */
    where?: OngoingTeenpattiGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OngoingTeenpattiGames to fetch.
     */
    orderBy?: OngoingTeenpattiGameOrderByWithRelationInput | OngoingTeenpattiGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OngoingTeenpattiGames.
     */
    cursor?: OngoingTeenpattiGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OngoingTeenpattiGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OngoingTeenpattiGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OngoingTeenpattiGames.
     */
    distinct?: OngoingTeenpattiGameScalarFieldEnum | OngoingTeenpattiGameScalarFieldEnum[]
  }

  /**
   * OngoingTeenpattiGame findFirstOrThrow
   */
  export type OngoingTeenpattiGameFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
    /**
     * Filter, which OngoingTeenpattiGame to fetch.
     */
    where?: OngoingTeenpattiGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OngoingTeenpattiGames to fetch.
     */
    orderBy?: OngoingTeenpattiGameOrderByWithRelationInput | OngoingTeenpattiGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OngoingTeenpattiGames.
     */
    cursor?: OngoingTeenpattiGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OngoingTeenpattiGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OngoingTeenpattiGames.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OngoingTeenpattiGames.
     */
    distinct?: OngoingTeenpattiGameScalarFieldEnum | OngoingTeenpattiGameScalarFieldEnum[]
  }

  /**
   * OngoingTeenpattiGame findMany
   */
  export type OngoingTeenpattiGameFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
    /**
     * Filter, which OngoingTeenpattiGames to fetch.
     */
    where?: OngoingTeenpattiGameWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OngoingTeenpattiGames to fetch.
     */
    orderBy?: OngoingTeenpattiGameOrderByWithRelationInput | OngoingTeenpattiGameOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OngoingTeenpattiGames.
     */
    cursor?: OngoingTeenpattiGameWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OngoingTeenpattiGames from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OngoingTeenpattiGames.
     */
    skip?: number
    distinct?: OngoingTeenpattiGameScalarFieldEnum | OngoingTeenpattiGameScalarFieldEnum[]
  }

  /**
   * OngoingTeenpattiGame create
   */
  export type OngoingTeenpattiGameCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
    /**
     * The data needed to create a OngoingTeenpattiGame.
     */
    data: XOR<OngoingTeenpattiGameCreateInput, OngoingTeenpattiGameUncheckedCreateInput>
  }

  /**
   * OngoingTeenpattiGame createMany
   */
  export type OngoingTeenpattiGameCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OngoingTeenpattiGames.
     */
    data: OngoingTeenpattiGameCreateManyInput | OngoingTeenpattiGameCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OngoingTeenpattiGame update
   */
  export type OngoingTeenpattiGameUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
    /**
     * The data needed to update a OngoingTeenpattiGame.
     */
    data: XOR<OngoingTeenpattiGameUpdateInput, OngoingTeenpattiGameUncheckedUpdateInput>
    /**
     * Choose, which OngoingTeenpattiGame to update.
     */
    where: OngoingTeenpattiGameWhereUniqueInput
  }

  /**
   * OngoingTeenpattiGame updateMany
   */
  export type OngoingTeenpattiGameUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OngoingTeenpattiGames.
     */
    data: XOR<OngoingTeenpattiGameUpdateManyMutationInput, OngoingTeenpattiGameUncheckedUpdateManyInput>
    /**
     * Filter which OngoingTeenpattiGames to update
     */
    where?: OngoingTeenpattiGameWhereInput
    /**
     * Limit how many OngoingTeenpattiGames to update.
     */
    limit?: number
  }

  /**
   * OngoingTeenpattiGame upsert
   */
  export type OngoingTeenpattiGameUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
    /**
     * The filter to search for the OngoingTeenpattiGame to update in case it exists.
     */
    where: OngoingTeenpattiGameWhereUniqueInput
    /**
     * In case the OngoingTeenpattiGame found by the `where` argument doesn't exist, create a new OngoingTeenpattiGame with this data.
     */
    create: XOR<OngoingTeenpattiGameCreateInput, OngoingTeenpattiGameUncheckedCreateInput>
    /**
     * In case the OngoingTeenpattiGame was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OngoingTeenpattiGameUpdateInput, OngoingTeenpattiGameUncheckedUpdateInput>
  }

  /**
   * OngoingTeenpattiGame delete
   */
  export type OngoingTeenpattiGameDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
    /**
     * Filter which OngoingTeenpattiGame to delete.
     */
    where: OngoingTeenpattiGameWhereUniqueInput
  }

  /**
   * OngoingTeenpattiGame deleteMany
   */
  export type OngoingTeenpattiGameDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OngoingTeenpattiGames to delete
     */
    where?: OngoingTeenpattiGameWhereInput
    /**
     * Limit how many OngoingTeenpattiGames to delete.
     */
    limit?: number
  }

  /**
   * OngoingTeenpattiGame without action
   */
  export type OngoingTeenpattiGameDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OngoingTeenpattiGame
     */
    select?: OngoingTeenpattiGameSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OngoingTeenpattiGame
     */
    omit?: OngoingTeenpattiGameOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    dbHost: 'dbHost',
    dbName: 'dbName',
    dbUser: 'dbUser',
    dbPassword: 'dbPassword',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const AdministratorScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    role: 'role',
    organizationId: 'organizationId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdministratorScalarFieldEnum = (typeof AdministratorScalarFieldEnum)[keyof typeof AdministratorScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    appKey: 'appKey',
    totalGamePlayed: 'totalGamePlayed',
    gameWon: 'gameWon',
    gameLost: 'gameLost',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const GameScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    appKey: 'appKey',
    token: 'token',
    status: 'status',
    config: 'config',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameScalarFieldEnum = (typeof GameScalarFieldEnum)[keyof typeof GameScalarFieldEnum]


  export const BetScalarFieldEnum: {
    id: 'id',
    gameId: 'gameId',
    userId: 'userId',
    bet: 'bet',
    type: 'type',
    appKey: 'appKey',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type BetScalarFieldEnum = (typeof BetScalarFieldEnum)[keyof typeof BetScalarFieldEnum]


  export const GameOngoingUsersScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    balance: 'balance',
    appKey: 'appKey',
    token: 'token',
    connectionUserId: 'connectionUserId',
    socketId: 'socketId',
    profilePicture: 'profilePicture',
    totalGamePlayed: 'totalGamePlayed',
    gameWon: 'gameWon',
    gameLost: 'gameLost',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GameOngoingUsersScalarFieldEnum = (typeof GameOngoingUsersScalarFieldEnum)[keyof typeof GameOngoingUsersScalarFieldEnum]


  export const OngoingTeenpattiGameScalarFieldEnum: {
    id: 'id',
    potIndex: 'potIndex',
    potName: 'potName',
    appKey: 'appKey',
    userId: 'userId',
    amount: 'amount',
    type: 'type',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OngoingTeenpattiGameScalarFieldEnum = (typeof OngoingTeenpattiGameScalarFieldEnum)[keyof typeof OngoingTeenpattiGameScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const OrganizationOrderByRelevanceFieldEnum: {
    name: 'name',
    email: 'email',
    dbHost: 'dbHost',
    dbName: 'dbName',
    dbUser: 'dbUser',
    dbPassword: 'dbPassword',
    status: 'status'
  };

  export type OrganizationOrderByRelevanceFieldEnum = (typeof OrganizationOrderByRelevanceFieldEnum)[keyof typeof OrganizationOrderByRelevanceFieldEnum]


  export const AdministratorOrderByRelevanceFieldEnum: {
    email: 'email',
    password: 'password',
    role: 'role'
  };

  export type AdministratorOrderByRelevanceFieldEnum = (typeof AdministratorOrderByRelevanceFieldEnum)[keyof typeof AdministratorOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const UserOrderByRelevanceFieldEnum: {
    userId: 'userId',
    name: 'name',
    appKey: 'appKey'
  };

  export type UserOrderByRelevanceFieldEnum = (typeof UserOrderByRelevanceFieldEnum)[keyof typeof UserOrderByRelevanceFieldEnum]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const GameOrderByRelevanceFieldEnum: {
    name: 'name',
    description: 'description',
    appKey: 'appKey',
    token: 'token',
    status: 'status'
  };

  export type GameOrderByRelevanceFieldEnum = (typeof GameOrderByRelevanceFieldEnum)[keyof typeof GameOrderByRelevanceFieldEnum]


  export const BetOrderByRelevanceFieldEnum: {
    userId: 'userId',
    appKey: 'appKey'
  };

  export type BetOrderByRelevanceFieldEnum = (typeof BetOrderByRelevanceFieldEnum)[keyof typeof BetOrderByRelevanceFieldEnum]


  export const GameOngoingUsersOrderByRelevanceFieldEnum: {
    userId: 'userId',
    name: 'name',
    balance: 'balance',
    appKey: 'appKey',
    token: 'token',
    connectionUserId: 'connectionUserId',
    socketId: 'socketId',
    profilePicture: 'profilePicture'
  };

  export type GameOngoingUsersOrderByRelevanceFieldEnum = (typeof GameOngoingUsersOrderByRelevanceFieldEnum)[keyof typeof GameOngoingUsersOrderByRelevanceFieldEnum]


  export const OngoingTeenpattiGameOrderByRelevanceFieldEnum: {
    potName: 'potName',
    appKey: 'appKey',
    userId: 'userId'
  };

  export type OngoingTeenpattiGameOrderByRelevanceFieldEnum = (typeof OngoingTeenpattiGameOrderByRelevanceFieldEnum)[keyof typeof OngoingTeenpattiGameOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: IntFilter<"Organization"> | number
    name?: StringFilter<"Organization"> | string
    email?: StringFilter<"Organization"> | string
    dbHost?: StringFilter<"Organization"> | string
    dbName?: StringFilter<"Organization"> | string
    dbUser?: StringFilter<"Organization"> | string
    dbPassword?: StringFilter<"Organization"> | string
    status?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    administrators?: AdministratorListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    dbHost?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    administrators?: AdministratorOrderByRelationAggregateInput
    _relevance?: OrganizationOrderByRelevanceInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    name?: StringFilter<"Organization"> | string
    dbHost?: StringFilter<"Organization"> | string
    dbName?: StringFilter<"Organization"> | string
    dbUser?: StringFilter<"Organization"> | string
    dbPassword?: StringFilter<"Organization"> | string
    status?: StringFilter<"Organization"> | string
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    administrators?: AdministratorListRelationFilter
  }, "id" | "email">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    dbHost?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organization"> | number
    name?: StringWithAggregatesFilter<"Organization"> | string
    email?: StringWithAggregatesFilter<"Organization"> | string
    dbHost?: StringWithAggregatesFilter<"Organization"> | string
    dbName?: StringWithAggregatesFilter<"Organization"> | string
    dbUser?: StringWithAggregatesFilter<"Organization"> | string
    dbPassword?: StringWithAggregatesFilter<"Organization"> | string
    status?: StringWithAggregatesFilter<"Organization"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type AdministratorWhereInput = {
    AND?: AdministratorWhereInput | AdministratorWhereInput[]
    OR?: AdministratorWhereInput[]
    NOT?: AdministratorWhereInput | AdministratorWhereInput[]
    id?: IntFilter<"Administrator"> | number
    email?: StringFilter<"Administrator"> | string
    password?: StringFilter<"Administrator"> | string
    role?: StringFilter<"Administrator"> | string
    organizationId?: IntFilter<"Administrator"> | number
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeFilter<"Administrator"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }

  export type AdministratorOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    _relevance?: AdministratorOrderByRelevanceInput
  }

  export type AdministratorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdministratorWhereInput | AdministratorWhereInput[]
    OR?: AdministratorWhereInput[]
    NOT?: AdministratorWhereInput | AdministratorWhereInput[]
    password?: StringFilter<"Administrator"> | string
    role?: StringFilter<"Administrator"> | string
    organizationId?: IntFilter<"Administrator"> | number
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeFilter<"Administrator"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
  }, "id" | "email">

  export type AdministratorOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdministratorCountOrderByAggregateInput
    _avg?: AdministratorAvgOrderByAggregateInput
    _max?: AdministratorMaxOrderByAggregateInput
    _min?: AdministratorMinOrderByAggregateInput
    _sum?: AdministratorSumOrderByAggregateInput
  }

  export type AdministratorScalarWhereWithAggregatesInput = {
    AND?: AdministratorScalarWhereWithAggregatesInput | AdministratorScalarWhereWithAggregatesInput[]
    OR?: AdministratorScalarWhereWithAggregatesInput[]
    NOT?: AdministratorScalarWhereWithAggregatesInput | AdministratorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Administrator"> | number
    email?: StringWithAggregatesFilter<"Administrator"> | string
    password?: StringWithAggregatesFilter<"Administrator"> | string
    role?: StringWithAggregatesFilter<"Administrator"> | string
    organizationId?: IntWithAggregatesFilter<"Administrator"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Administrator"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    userId?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    appKey?: StringNullableFilter<"User"> | string | null
    totalGamePlayed?: IntFilter<"User"> | number
    gameWon?: IntFilter<"User"> | number
    gameLost?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: UserOrderByRelevanceInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    userId?: StringNullableFilter<"User"> | string | null
    name?: StringNullableFilter<"User"> | string | null
    appKey?: StringNullableFilter<"User"> | string | null
    totalGamePlayed?: IntFilter<"User"> | number
    gameWon?: IntFilter<"User"> | number
    gameLost?: IntFilter<"User"> | number
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    userId?: StringNullableWithAggregatesFilter<"User"> | string | null
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    appKey?: StringNullableWithAggregatesFilter<"User"> | string | null
    totalGamePlayed?: IntWithAggregatesFilter<"User"> | number
    gameWon?: IntWithAggregatesFilter<"User"> | number
    gameLost?: IntWithAggregatesFilter<"User"> | number
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type GameWhereInput = {
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    id?: IntFilter<"Game"> | number
    name?: StringFilter<"Game"> | string
    description?: StringNullableFilter<"Game"> | string | null
    appKey?: StringNullableFilter<"Game"> | string | null
    token?: StringNullableFilter<"Game"> | string | null
    status?: StringFilter<"Game"> | string
    config?: JsonNullableFilter<"Game">
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
  }

  export type GameOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    status?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: GameOrderByRelevanceInput
  }

  export type GameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: GameWhereInput | GameWhereInput[]
    OR?: GameWhereInput[]
    NOT?: GameWhereInput | GameWhereInput[]
    name?: StringFilter<"Game"> | string
    description?: StringNullableFilter<"Game"> | string | null
    appKey?: StringNullableFilter<"Game"> | string | null
    token?: StringNullableFilter<"Game"> | string | null
    status?: StringFilter<"Game"> | string
    config?: JsonNullableFilter<"Game">
    createdAt?: DateTimeFilter<"Game"> | Date | string
    updatedAt?: DateTimeFilter<"Game"> | Date | string
  }, "id">

  export type GameOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    status?: SortOrder
    config?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameCountOrderByAggregateInput
    _avg?: GameAvgOrderByAggregateInput
    _max?: GameMaxOrderByAggregateInput
    _min?: GameMinOrderByAggregateInput
    _sum?: GameSumOrderByAggregateInput
  }

  export type GameScalarWhereWithAggregatesInput = {
    AND?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    OR?: GameScalarWhereWithAggregatesInput[]
    NOT?: GameScalarWhereWithAggregatesInput | GameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Game"> | number
    name?: StringWithAggregatesFilter<"Game"> | string
    description?: StringNullableWithAggregatesFilter<"Game"> | string | null
    appKey?: StringNullableWithAggregatesFilter<"Game"> | string | null
    token?: StringNullableWithAggregatesFilter<"Game"> | string | null
    status?: StringWithAggregatesFilter<"Game"> | string
    config?: JsonNullableWithAggregatesFilter<"Game">
    createdAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Game"> | Date | string
  }

  export type BetWhereInput = {
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    id?: IntFilter<"Bet"> | number
    gameId?: IntFilter<"Bet"> | number
    userId?: StringNullableFilter<"Bet"> | string | null
    bet?: IntNullableFilter<"Bet"> | number | null
    type?: IntNullableFilter<"Bet"> | number | null
    appKey?: StringNullableFilter<"Bet"> | string | null
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    updatedAt?: DateTimeFilter<"Bet"> | Date | string
  }

  export type BetOrderByWithRelationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrderInput | SortOrder
    bet?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: BetOrderByRelevanceInput
  }

  export type BetWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: BetWhereInput | BetWhereInput[]
    OR?: BetWhereInput[]
    NOT?: BetWhereInput | BetWhereInput[]
    gameId?: IntFilter<"Bet"> | number
    userId?: StringNullableFilter<"Bet"> | string | null
    bet?: IntNullableFilter<"Bet"> | number | null
    type?: IntNullableFilter<"Bet"> | number | null
    appKey?: StringNullableFilter<"Bet"> | string | null
    createdAt?: DateTimeFilter<"Bet"> | Date | string
    updatedAt?: DateTimeFilter<"Bet"> | Date | string
  }, "id">

  export type BetOrderByWithAggregationInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrderInput | SortOrder
    bet?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: BetCountOrderByAggregateInput
    _avg?: BetAvgOrderByAggregateInput
    _max?: BetMaxOrderByAggregateInput
    _min?: BetMinOrderByAggregateInput
    _sum?: BetSumOrderByAggregateInput
  }

  export type BetScalarWhereWithAggregatesInput = {
    AND?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    OR?: BetScalarWhereWithAggregatesInput[]
    NOT?: BetScalarWhereWithAggregatesInput | BetScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Bet"> | number
    gameId?: IntWithAggregatesFilter<"Bet"> | number
    userId?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    bet?: IntNullableWithAggregatesFilter<"Bet"> | number | null
    type?: IntNullableWithAggregatesFilter<"Bet"> | number | null
    appKey?: StringNullableWithAggregatesFilter<"Bet"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Bet"> | Date | string
  }

  export type GameOngoingUsersWhereInput = {
    AND?: GameOngoingUsersWhereInput | GameOngoingUsersWhereInput[]
    OR?: GameOngoingUsersWhereInput[]
    NOT?: GameOngoingUsersWhereInput | GameOngoingUsersWhereInput[]
    id?: IntFilter<"GameOngoingUsers"> | number
    userId?: StringFilter<"GameOngoingUsers"> | string
    name?: StringNullableFilter<"GameOngoingUsers"> | string | null
    balance?: StringNullableFilter<"GameOngoingUsers"> | string | null
    appKey?: StringNullableFilter<"GameOngoingUsers"> | string | null
    token?: StringNullableFilter<"GameOngoingUsers"> | string | null
    connectionUserId?: StringNullableFilter<"GameOngoingUsers"> | string | null
    socketId?: StringNullableFilter<"GameOngoingUsers"> | string | null
    profilePicture?: StringNullableFilter<"GameOngoingUsers"> | string | null
    totalGamePlayed?: IntFilter<"GameOngoingUsers"> | number
    gameWon?: IntFilter<"GameOngoingUsers"> | number
    gameLost?: IntFilter<"GameOngoingUsers"> | number
    createdAt?: DateTimeFilter<"GameOngoingUsers"> | Date | string
    updatedAt?: DateTimeFilter<"GameOngoingUsers"> | Date | string
  }

  export type GameOngoingUsersOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    connectionUserId?: SortOrderInput | SortOrder
    socketId?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: GameOngoingUsersOrderByRelevanceInput
  }

  export type GameOngoingUsersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    userId?: string
    AND?: GameOngoingUsersWhereInput | GameOngoingUsersWhereInput[]
    OR?: GameOngoingUsersWhereInput[]
    NOT?: GameOngoingUsersWhereInput | GameOngoingUsersWhereInput[]
    name?: StringNullableFilter<"GameOngoingUsers"> | string | null
    balance?: StringNullableFilter<"GameOngoingUsers"> | string | null
    appKey?: StringNullableFilter<"GameOngoingUsers"> | string | null
    token?: StringNullableFilter<"GameOngoingUsers"> | string | null
    connectionUserId?: StringNullableFilter<"GameOngoingUsers"> | string | null
    socketId?: StringNullableFilter<"GameOngoingUsers"> | string | null
    profilePicture?: StringNullableFilter<"GameOngoingUsers"> | string | null
    totalGamePlayed?: IntFilter<"GameOngoingUsers"> | number
    gameWon?: IntFilter<"GameOngoingUsers"> | number
    gameLost?: IntFilter<"GameOngoingUsers"> | number
    createdAt?: DateTimeFilter<"GameOngoingUsers"> | Date | string
    updatedAt?: DateTimeFilter<"GameOngoingUsers"> | Date | string
  }, "id" | "userId">

  export type GameOngoingUsersOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrderInput | SortOrder
    balance?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    token?: SortOrderInput | SortOrder
    connectionUserId?: SortOrderInput | SortOrder
    socketId?: SortOrderInput | SortOrder
    profilePicture?: SortOrderInput | SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GameOngoingUsersCountOrderByAggregateInput
    _avg?: GameOngoingUsersAvgOrderByAggregateInput
    _max?: GameOngoingUsersMaxOrderByAggregateInput
    _min?: GameOngoingUsersMinOrderByAggregateInput
    _sum?: GameOngoingUsersSumOrderByAggregateInput
  }

  export type GameOngoingUsersScalarWhereWithAggregatesInput = {
    AND?: GameOngoingUsersScalarWhereWithAggregatesInput | GameOngoingUsersScalarWhereWithAggregatesInput[]
    OR?: GameOngoingUsersScalarWhereWithAggregatesInput[]
    NOT?: GameOngoingUsersScalarWhereWithAggregatesInput | GameOngoingUsersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"GameOngoingUsers"> | number
    userId?: StringWithAggregatesFilter<"GameOngoingUsers"> | string
    name?: StringNullableWithAggregatesFilter<"GameOngoingUsers"> | string | null
    balance?: StringNullableWithAggregatesFilter<"GameOngoingUsers"> | string | null
    appKey?: StringNullableWithAggregatesFilter<"GameOngoingUsers"> | string | null
    token?: StringNullableWithAggregatesFilter<"GameOngoingUsers"> | string | null
    connectionUserId?: StringNullableWithAggregatesFilter<"GameOngoingUsers"> | string | null
    socketId?: StringNullableWithAggregatesFilter<"GameOngoingUsers"> | string | null
    profilePicture?: StringNullableWithAggregatesFilter<"GameOngoingUsers"> | string | null
    totalGamePlayed?: IntWithAggregatesFilter<"GameOngoingUsers"> | number
    gameWon?: IntWithAggregatesFilter<"GameOngoingUsers"> | number
    gameLost?: IntWithAggregatesFilter<"GameOngoingUsers"> | number
    createdAt?: DateTimeWithAggregatesFilter<"GameOngoingUsers"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GameOngoingUsers"> | Date | string
  }

  export type OngoingTeenpattiGameWhereInput = {
    AND?: OngoingTeenpattiGameWhereInput | OngoingTeenpattiGameWhereInput[]
    OR?: OngoingTeenpattiGameWhereInput[]
    NOT?: OngoingTeenpattiGameWhereInput | OngoingTeenpattiGameWhereInput[]
    id?: IntFilter<"OngoingTeenpattiGame"> | number
    potIndex?: IntNullableFilter<"OngoingTeenpattiGame"> | number | null
    potName?: StringNullableFilter<"OngoingTeenpattiGame"> | string | null
    appKey?: StringNullableFilter<"OngoingTeenpattiGame"> | string | null
    userId?: StringNullableFilter<"OngoingTeenpattiGame"> | string | null
    amount?: IntNullableFilter<"OngoingTeenpattiGame"> | number | null
    type?: IntNullableFilter<"OngoingTeenpattiGame"> | number | null
    createdAt?: DateTimeFilter<"OngoingTeenpattiGame"> | Date | string
    updatedAt?: DateTimeFilter<"OngoingTeenpattiGame"> | Date | string
  }

  export type OngoingTeenpattiGameOrderByWithRelationInput = {
    id?: SortOrder
    potIndex?: SortOrderInput | SortOrder
    potName?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _relevance?: OngoingTeenpattiGameOrderByRelevanceInput
  }

  export type OngoingTeenpattiGameWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OngoingTeenpattiGameWhereInput | OngoingTeenpattiGameWhereInput[]
    OR?: OngoingTeenpattiGameWhereInput[]
    NOT?: OngoingTeenpattiGameWhereInput | OngoingTeenpattiGameWhereInput[]
    potIndex?: IntNullableFilter<"OngoingTeenpattiGame"> | number | null
    potName?: StringNullableFilter<"OngoingTeenpattiGame"> | string | null
    appKey?: StringNullableFilter<"OngoingTeenpattiGame"> | string | null
    userId?: StringNullableFilter<"OngoingTeenpattiGame"> | string | null
    amount?: IntNullableFilter<"OngoingTeenpattiGame"> | number | null
    type?: IntNullableFilter<"OngoingTeenpattiGame"> | number | null
    createdAt?: DateTimeFilter<"OngoingTeenpattiGame"> | Date | string
    updatedAt?: DateTimeFilter<"OngoingTeenpattiGame"> | Date | string
  }, "id">

  export type OngoingTeenpattiGameOrderByWithAggregationInput = {
    id?: SortOrder
    potIndex?: SortOrderInput | SortOrder
    potName?: SortOrderInput | SortOrder
    appKey?: SortOrderInput | SortOrder
    userId?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OngoingTeenpattiGameCountOrderByAggregateInput
    _avg?: OngoingTeenpattiGameAvgOrderByAggregateInput
    _max?: OngoingTeenpattiGameMaxOrderByAggregateInput
    _min?: OngoingTeenpattiGameMinOrderByAggregateInput
    _sum?: OngoingTeenpattiGameSumOrderByAggregateInput
  }

  export type OngoingTeenpattiGameScalarWhereWithAggregatesInput = {
    AND?: OngoingTeenpattiGameScalarWhereWithAggregatesInput | OngoingTeenpattiGameScalarWhereWithAggregatesInput[]
    OR?: OngoingTeenpattiGameScalarWhereWithAggregatesInput[]
    NOT?: OngoingTeenpattiGameScalarWhereWithAggregatesInput | OngoingTeenpattiGameScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OngoingTeenpattiGame"> | number
    potIndex?: IntNullableWithAggregatesFilter<"OngoingTeenpattiGame"> | number | null
    potName?: StringNullableWithAggregatesFilter<"OngoingTeenpattiGame"> | string | null
    appKey?: StringNullableWithAggregatesFilter<"OngoingTeenpattiGame"> | string | null
    userId?: StringNullableWithAggregatesFilter<"OngoingTeenpattiGame"> | string | null
    amount?: IntNullableWithAggregatesFilter<"OngoingTeenpattiGame"> | number | null
    type?: IntNullableWithAggregatesFilter<"OngoingTeenpattiGame"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"OngoingTeenpattiGame"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OngoingTeenpattiGame"> | Date | string
  }

  export type OrganizationCreateInput = {
    name: string
    email: string
    dbHost: string
    dbName: string
    dbUser: string
    dbPassword: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    administrators?: AdministratorCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    dbHost: string
    dbName: string
    dbUser: string
    dbPassword: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    administrators?: AdministratorUncheckedCreateNestedManyWithoutOrganizationInput
  }

  export type OrganizationUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrators?: AdministratorUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    administrators?: AdministratorUncheckedUpdateManyWithoutOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: number
    name: string
    email: string
    dbHost: string
    dbName: string
    dbUser: string
    dbPassword: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorCreateInput = {
    email: string
    password?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutAdministratorsInput
  }

  export type AdministratorUncheckedCreateInput = {
    id?: number
    email: string
    password?: string
    role?: string
    organizationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutAdministratorsNestedInput
  }

  export type AdministratorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorCreateManyInput = {
    id?: number
    email: string
    password?: string
    role?: string
    organizationId: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    organizationId?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    userId?: string | null
    name?: string | null
    appKey?: string | null
    totalGamePlayed?: number
    gameWon?: number
    gameLost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: number
    userId?: string | null
    name?: string | null
    appKey?: string | null
    totalGamePlayed?: number
    gameWon?: number
    gameLost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalGamePlayed?: IntFieldUpdateOperationsInput | number
    gameWon?: IntFieldUpdateOperationsInput | number
    gameLost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalGamePlayed?: IntFieldUpdateOperationsInput | number
    gameWon?: IntFieldUpdateOperationsInput | number
    gameLost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: number
    userId?: string | null
    name?: string | null
    appKey?: string | null
    totalGamePlayed?: number
    gameWon?: number
    gameLost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalGamePlayed?: IntFieldUpdateOperationsInput | number
    gameWon?: IntFieldUpdateOperationsInput | number
    gameLost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    totalGamePlayed?: IntFieldUpdateOperationsInput | number
    gameWon?: IntFieldUpdateOperationsInput | number
    gameLost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateInput = {
    name: string
    description?: string | null
    appKey?: string | null
    token?: string | null
    status?: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUncheckedCreateInput = {
    id?: number
    name: string
    description?: string | null
    appKey?: string | null
    token?: string | null
    status?: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameCreateManyInput = {
    id?: number
    name: string
    description?: string | null
    appKey?: string | null
    token?: string | null
    status?: string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    config?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateInput = {
    gameId: number
    userId?: string | null
    bet?: number | null
    type?: number | null
    appKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetUncheckedCreateInput = {
    id?: number
    gameId: number
    userId?: string | null
    bet?: number | null
    type?: number | null
    appKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetUpdateInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bet?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bet?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetCreateManyInput = {
    id?: number
    gameId: number
    userId?: string | null
    bet?: number | null
    type?: number | null
    appKey?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type BetUpdateManyMutationInput = {
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bet?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BetUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    gameId?: IntFieldUpdateOperationsInput | number
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    bet?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameOngoingUsersCreateInput = {
    userId: string
    name?: string | null
    balance?: string | null
    appKey?: string | null
    token?: string | null
    connectionUserId?: string | null
    socketId?: string | null
    profilePicture?: string | null
    totalGamePlayed?: number
    gameWon?: number
    gameLost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameOngoingUsersUncheckedCreateInput = {
    id?: number
    userId: string
    name?: string | null
    balance?: string | null
    appKey?: string | null
    token?: string | null
    connectionUserId?: string | null
    socketId?: string | null
    profilePicture?: string | null
    totalGamePlayed?: number
    gameWon?: number
    gameLost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameOngoingUsersUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    connectionUserId?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    totalGamePlayed?: IntFieldUpdateOperationsInput | number
    gameWon?: IntFieldUpdateOperationsInput | number
    gameLost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameOngoingUsersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    connectionUserId?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    totalGamePlayed?: IntFieldUpdateOperationsInput | number
    gameWon?: IntFieldUpdateOperationsInput | number
    gameLost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameOngoingUsersCreateManyInput = {
    id?: number
    userId: string
    name?: string | null
    balance?: string | null
    appKey?: string | null
    token?: string | null
    connectionUserId?: string | null
    socketId?: string | null
    profilePicture?: string | null
    totalGamePlayed?: number
    gameWon?: number
    gameLost?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GameOngoingUsersUpdateManyMutationInput = {
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    connectionUserId?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    totalGamePlayed?: IntFieldUpdateOperationsInput | number
    gameWon?: IntFieldUpdateOperationsInput | number
    gameLost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GameOngoingUsersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    balance?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    token?: NullableStringFieldUpdateOperationsInput | string | null
    connectionUserId?: NullableStringFieldUpdateOperationsInput | string | null
    socketId?: NullableStringFieldUpdateOperationsInput | string | null
    profilePicture?: NullableStringFieldUpdateOperationsInput | string | null
    totalGamePlayed?: IntFieldUpdateOperationsInput | number
    gameWon?: IntFieldUpdateOperationsInput | number
    gameLost?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngoingTeenpattiGameCreateInput = {
    potIndex?: number | null
    potName?: string | null
    appKey?: string | null
    userId?: string | null
    amount?: number | null
    type?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OngoingTeenpattiGameUncheckedCreateInput = {
    id?: number
    potIndex?: number | null
    potName?: string | null
    appKey?: string | null
    userId?: string | null
    amount?: number | null
    type?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OngoingTeenpattiGameUpdateInput = {
    potIndex?: NullableIntFieldUpdateOperationsInput | number | null
    potName?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngoingTeenpattiGameUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    potIndex?: NullableIntFieldUpdateOperationsInput | number | null
    potName?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngoingTeenpattiGameCreateManyInput = {
    id?: number
    potIndex?: number | null
    potName?: string | null
    appKey?: string | null
    userId?: string | null
    amount?: number | null
    type?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OngoingTeenpattiGameUpdateManyMutationInput = {
    potIndex?: NullableIntFieldUpdateOperationsInput | number | null
    potName?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OngoingTeenpattiGameUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    potIndex?: NullableIntFieldUpdateOperationsInput | number | null
    potName?: NullableStringFieldUpdateOperationsInput | string | null
    appKey?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableIntFieldUpdateOperationsInput | number | null
    type?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdministratorListRelationFilter = {
    every?: AdministratorWhereInput
    some?: AdministratorWhereInput
    none?: AdministratorWhereInput
  }

  export type AdministratorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationOrderByRelevanceInput = {
    fields: OrganizationOrderByRelevanceFieldEnum | OrganizationOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    dbHost?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    dbHost?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    dbHost?: SortOrder
    dbName?: SortOrder
    dbUser?: SortOrder
    dbPassword?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type AdministratorOrderByRelevanceInput = {
    fields: AdministratorOrderByRelevanceFieldEnum | AdministratorOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AdministratorCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministratorAvgOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type AdministratorMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministratorMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    organizationId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdministratorSumOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelevanceInput = {
    fields: UserOrderByRelevanceFieldEnum | UserOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    appKey?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    appKey?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    appKey?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type GameOrderByRelevanceInput = {
    fields: GameOrderByRelevanceFieldEnum | GameOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GameCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    appKey?: SortOrder
    token?: SortOrder
    status?: SortOrder
    config?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type GameMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    appKey?: SortOrder
    token?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    appKey?: SortOrder
    token?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameSumOrderByAggregateInput = {
    id?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BetOrderByRelevanceInput = {
    fields: BetOrderByRelevanceFieldEnum | BetOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type BetCountOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    bet?: SortOrder
    type?: SortOrder
    appKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetAvgOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    bet?: SortOrder
    type?: SortOrder
  }

  export type BetMaxOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    bet?: SortOrder
    type?: SortOrder
    appKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetMinOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    userId?: SortOrder
    bet?: SortOrder
    type?: SortOrder
    appKey?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BetSumOrderByAggregateInput = {
    id?: SortOrder
    gameId?: SortOrder
    bet?: SortOrder
    type?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type GameOngoingUsersOrderByRelevanceInput = {
    fields: GameOngoingUsersOrderByRelevanceFieldEnum | GameOngoingUsersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type GameOngoingUsersCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    appKey?: SortOrder
    token?: SortOrder
    connectionUserId?: SortOrder
    socketId?: SortOrder
    profilePicture?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameOngoingUsersAvgOrderByAggregateInput = {
    id?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
  }

  export type GameOngoingUsersMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    appKey?: SortOrder
    token?: SortOrder
    connectionUserId?: SortOrder
    socketId?: SortOrder
    profilePicture?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameOngoingUsersMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    balance?: SortOrder
    appKey?: SortOrder
    token?: SortOrder
    connectionUserId?: SortOrder
    socketId?: SortOrder
    profilePicture?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GameOngoingUsersSumOrderByAggregateInput = {
    id?: SortOrder
    totalGamePlayed?: SortOrder
    gameWon?: SortOrder
    gameLost?: SortOrder
  }

  export type OngoingTeenpattiGameOrderByRelevanceInput = {
    fields: OngoingTeenpattiGameOrderByRelevanceFieldEnum | OngoingTeenpattiGameOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type OngoingTeenpattiGameCountOrderByAggregateInput = {
    id?: SortOrder
    potIndex?: SortOrder
    potName?: SortOrder
    appKey?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OngoingTeenpattiGameAvgOrderByAggregateInput = {
    id?: SortOrder
    potIndex?: SortOrder
    amount?: SortOrder
    type?: SortOrder
  }

  export type OngoingTeenpattiGameMaxOrderByAggregateInput = {
    id?: SortOrder
    potIndex?: SortOrder
    potName?: SortOrder
    appKey?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OngoingTeenpattiGameMinOrderByAggregateInput = {
    id?: SortOrder
    potIndex?: SortOrder
    potName?: SortOrder
    appKey?: SortOrder
    userId?: SortOrder
    amount?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OngoingTeenpattiGameSumOrderByAggregateInput = {
    id?: SortOrder
    potIndex?: SortOrder
    amount?: SortOrder
    type?: SortOrder
  }

  export type AdministratorCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AdministratorCreateWithoutOrganizationInput, AdministratorUncheckedCreateWithoutOrganizationInput> | AdministratorCreateWithoutOrganizationInput[] | AdministratorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdministratorCreateOrConnectWithoutOrganizationInput | AdministratorCreateOrConnectWithoutOrganizationInput[]
    createMany?: AdministratorCreateManyOrganizationInputEnvelope
    connect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
  }

  export type AdministratorUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AdministratorCreateWithoutOrganizationInput, AdministratorUncheckedCreateWithoutOrganizationInput> | AdministratorCreateWithoutOrganizationInput[] | AdministratorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdministratorCreateOrConnectWithoutOrganizationInput | AdministratorCreateOrConnectWithoutOrganizationInput[]
    createMany?: AdministratorCreateManyOrganizationInputEnvelope
    connect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AdministratorUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AdministratorCreateWithoutOrganizationInput, AdministratorUncheckedCreateWithoutOrganizationInput> | AdministratorCreateWithoutOrganizationInput[] | AdministratorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdministratorCreateOrConnectWithoutOrganizationInput | AdministratorCreateOrConnectWithoutOrganizationInput[]
    upsert?: AdministratorUpsertWithWhereUniqueWithoutOrganizationInput | AdministratorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AdministratorCreateManyOrganizationInputEnvelope
    set?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    disconnect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    delete?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    connect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    update?: AdministratorUpdateWithWhereUniqueWithoutOrganizationInput | AdministratorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AdministratorUpdateManyWithWhereWithoutOrganizationInput | AdministratorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AdministratorScalarWhereInput | AdministratorScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AdministratorUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AdministratorCreateWithoutOrganizationInput, AdministratorUncheckedCreateWithoutOrganizationInput> | AdministratorCreateWithoutOrganizationInput[] | AdministratorUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AdministratorCreateOrConnectWithoutOrganizationInput | AdministratorCreateOrConnectWithoutOrganizationInput[]
    upsert?: AdministratorUpsertWithWhereUniqueWithoutOrganizationInput | AdministratorUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AdministratorCreateManyOrganizationInputEnvelope
    set?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    disconnect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    delete?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    connect?: AdministratorWhereUniqueInput | AdministratorWhereUniqueInput[]
    update?: AdministratorUpdateWithWhereUniqueWithoutOrganizationInput | AdministratorUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AdministratorUpdateManyWithWhereWithoutOrganizationInput | AdministratorUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AdministratorScalarWhereInput | AdministratorScalarWhereInput[]
  }

  export type OrganizationCreateNestedOneWithoutAdministratorsInput = {
    create?: XOR<OrganizationCreateWithoutAdministratorsInput, OrganizationUncheckedCreateWithoutAdministratorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdministratorsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationUpdateOneRequiredWithoutAdministratorsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAdministratorsInput, OrganizationUncheckedCreateWithoutAdministratorsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAdministratorsInput
    upsert?: OrganizationUpsertWithoutAdministratorsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAdministratorsInput, OrganizationUpdateWithoutAdministratorsInput>, OrganizationUncheckedUpdateWithoutAdministratorsInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue
    lte?: InputJsonValue
    gt?: InputJsonValue
    gte?: InputJsonValue
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AdministratorCreateWithoutOrganizationInput = {
    email: string
    password?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorUncheckedCreateWithoutOrganizationInput = {
    id?: number
    email: string
    password?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorCreateOrConnectWithoutOrganizationInput = {
    where: AdministratorWhereUniqueInput
    create: XOR<AdministratorCreateWithoutOrganizationInput, AdministratorUncheckedCreateWithoutOrganizationInput>
  }

  export type AdministratorCreateManyOrganizationInputEnvelope = {
    data: AdministratorCreateManyOrganizationInput | AdministratorCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AdministratorUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AdministratorWhereUniqueInput
    update: XOR<AdministratorUpdateWithoutOrganizationInput, AdministratorUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AdministratorCreateWithoutOrganizationInput, AdministratorUncheckedCreateWithoutOrganizationInput>
  }

  export type AdministratorUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AdministratorWhereUniqueInput
    data: XOR<AdministratorUpdateWithoutOrganizationInput, AdministratorUncheckedUpdateWithoutOrganizationInput>
  }

  export type AdministratorUpdateManyWithWhereWithoutOrganizationInput = {
    where: AdministratorScalarWhereInput
    data: XOR<AdministratorUpdateManyMutationInput, AdministratorUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AdministratorScalarWhereInput = {
    AND?: AdministratorScalarWhereInput | AdministratorScalarWhereInput[]
    OR?: AdministratorScalarWhereInput[]
    NOT?: AdministratorScalarWhereInput | AdministratorScalarWhereInput[]
    id?: IntFilter<"Administrator"> | number
    email?: StringFilter<"Administrator"> | string
    password?: StringFilter<"Administrator"> | string
    role?: StringFilter<"Administrator"> | string
    organizationId?: IntFilter<"Administrator"> | number
    createdAt?: DateTimeFilter<"Administrator"> | Date | string
    updatedAt?: DateTimeFilter<"Administrator"> | Date | string
  }

  export type OrganizationCreateWithoutAdministratorsInput = {
    name: string
    email: string
    dbHost: string
    dbName: string
    dbUser: string
    dbPassword: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUncheckedCreateWithoutAdministratorsInput = {
    id?: number
    name: string
    email: string
    dbHost: string
    dbName: string
    dbUser: string
    dbPassword: string
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationCreateOrConnectWithoutAdministratorsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAdministratorsInput, OrganizationUncheckedCreateWithoutAdministratorsInput>
  }

  export type OrganizationUpsertWithoutAdministratorsInput = {
    update: XOR<OrganizationUpdateWithoutAdministratorsInput, OrganizationUncheckedUpdateWithoutAdministratorsInput>
    create: XOR<OrganizationCreateWithoutAdministratorsInput, OrganizationUncheckedCreateWithoutAdministratorsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAdministratorsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAdministratorsInput, OrganizationUncheckedUpdateWithoutAdministratorsInput>
  }

  export type OrganizationUpdateWithoutAdministratorsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateWithoutAdministratorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    dbHost?: StringFieldUpdateOperationsInput | string
    dbName?: StringFieldUpdateOperationsInput | string
    dbUser?: StringFieldUpdateOperationsInput | string
    dbPassword?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorCreateManyOrganizationInput = {
    id?: number
    email: string
    password?: string
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdministratorUpdateWithoutOrganizationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUncheckedUpdateWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdministratorUncheckedUpdateManyWithoutOrganizationInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}