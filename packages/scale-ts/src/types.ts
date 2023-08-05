export type Encoder<T> = (value: T) => Uint8Array
export type Decoder<T> = (value: Uint8Array | ArrayBuffer | string) => T

export type Codec<T> = [Encoder<T>, Decoder<T>] & {
  enc: Encoder<T>
  dec: Decoder<T>
}

export type CodecType<T extends Codec<any>> = T extends Codec<infer V>
  ? V
  : unknown

export type EncoderType<T extends Encoder<any>> = T extends Encoder<infer V>
  ? V
  : unknown

export type DecoderType<T extends Decoder<any>> = T extends Decoder<infer V>
  ? V
  : unknown

export type StringRecord<T> = {
  [Sym: symbol]: never
  [Num: number]: never
  [Str: string]: T
}
