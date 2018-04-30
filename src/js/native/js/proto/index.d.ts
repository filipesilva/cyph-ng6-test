import * as $protobuf from "protobufjs";

/** Properties of an AccountFileRecord. */
export interface IAccountFileRecord {

    /** File ID. */
    id: string;

    /** File MIME type. */
    mediaType: string;

    /** File name. */
    name: string;

    /** Type of file record. */
    recordType: AccountFileRecord.RecordTypes;

    /** Size in bytes. */
    size: number;

    /** Timestamp of upload or last save. */
    timestamp: number;

    /** Indicates whether this file was originally an anonymous share. */
    wasAnonymousShare?: (boolean|undefined);
}

/** Metadata of one file stored in an account. */
export class AccountFileRecord implements IAccountFileRecord {

    /**
     * Constructs a new AccountFileRecord.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountFileRecord);

    /** File ID. */
    public id: string;

    /** File MIME type. */
    public mediaType: string;

    /** File name. */
    public name: string;

    /** Type of file record. */
    public recordType: AccountFileRecord.RecordTypes;

    /** Size in bytes. */
    public size: number;

    /** Timestamp of upload or last save. */
    public timestamp: number;

    /** Indicates whether this file was originally an anonymous share. */
    public wasAnonymousShare: boolean;

    /**
     * Creates a new AccountFileRecord instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountFileRecord instance
     */
    public static create(properties?: IAccountFileRecord): AccountFileRecord;

    /**
     * Encodes the specified AccountFileRecord message. Does not implicitly {@link AccountFileRecord.verify|verify} messages.
     * @param message AccountFileRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountFileRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountFileRecord message, length delimited. Does not implicitly {@link AccountFileRecord.verify|verify} messages.
     * @param message AccountFileRecord message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountFileRecord, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountFileRecord message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountFileRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountFileRecord;

    /**
     * Decodes an AccountFileRecord message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountFileRecord
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountFileRecord;

    /**
     * Verifies an AccountFileRecord message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an AccountFileRecord message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountFileRecord
     */
    public static fromObject(object: { [k: string]: any }): AccountFileRecord;

    /**
     * Creates a plain object from an AccountFileRecord message. Also converts values to other types if specified.
     * @param message AccountFileRecord
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountFileRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountFileRecord to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace AccountFileRecord {

    /** Possible file record types. */
    enum RecordTypes {
        Appointment = 0,
        File = 1,
        Doc = 2,
        EhrApiKey = 3,
        Form = 4,
        Note = 5
    }
}

/** Properties of an AccountFileReference. */
export interface IAccountFileReference {

    /** File record ID. */
    id: string;

    /** Symmetric key used for encrypting file. */
    key: Uint8Array;

    /** Username of owner. */
    owner: string;
}

/** Shareable reference to a file record. */
export class AccountFileReference implements IAccountFileReference {

    /**
     * Constructs a new AccountFileReference.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountFileReference);

    /** File record ID. */
    public id: string;

    /** Symmetric key used for encrypting file. */
    public key: Uint8Array;

    /** Username of owner. */
    public owner: string;

    /**
     * Creates a new AccountFileReference instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountFileReference instance
     */
    public static create(properties?: IAccountFileReference): AccountFileReference;

    /**
     * Encodes the specified AccountFileReference message. Does not implicitly {@link AccountFileReference.verify|verify} messages.
     * @param message AccountFileReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountFileReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountFileReference message, length delimited. Does not implicitly {@link AccountFileReference.verify|verify} messages.
     * @param message AccountFileReference message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountFileReference, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountFileReference message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountFileReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountFileReference;

    /**
     * Decodes an AccountFileReference message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountFileReference
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountFileReference;

    /**
     * Verifies an AccountFileReference message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an AccountFileReference message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountFileReference
     */
    public static fromObject(object: { [k: string]: any }): AccountFileReference;

    /**
     * Creates a plain object from an AccountFileReference message. Also converts values to other types if specified.
     * @param message AccountFileReference
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountFileReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountFileReference to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AccountFileReferenceContainer. */
export interface IAccountFileReferenceContainer {

    /** AccountFileReferenceContainer anonymousShare */
    anonymousShare?: (AccountFileReferenceContainer.IAnonymousShare|undefined);

    /** AccountFileReferenceContainer signedShare */
    signedShare?: (AccountFileReferenceContainer.ISignedShare|undefined);
}

/** Contains a file reference. */
export class AccountFileReferenceContainer implements IAccountFileReferenceContainer {

    /**
     * Constructs a new AccountFileReferenceContainer.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountFileReferenceContainer);

    /** AccountFileReferenceContainer anonymousShare. */
    public anonymousShare?: AccountFileReferenceContainer.IAnonymousShare;

    /** AccountFileReferenceContainer signedShare. */
    public signedShare?: AccountFileReferenceContainer.ISignedShare;

    /** Value. */
    public value?: ("anonymousShare"|"signedShare");

    /**
     * Creates a new AccountFileReferenceContainer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountFileReferenceContainer instance
     */
    public static create(properties?: IAccountFileReferenceContainer): AccountFileReferenceContainer;

    /**
     * Encodes the specified AccountFileReferenceContainer message. Does not implicitly {@link AccountFileReferenceContainer.verify|verify} messages.
     * @param message AccountFileReferenceContainer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountFileReferenceContainer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountFileReferenceContainer message, length delimited. Does not implicitly {@link AccountFileReferenceContainer.verify|verify} messages.
     * @param message AccountFileReferenceContainer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountFileReferenceContainer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountFileReferenceContainer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountFileReferenceContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountFileReferenceContainer;

    /**
     * Decodes an AccountFileReferenceContainer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountFileReferenceContainer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountFileReferenceContainer;

    /**
     * Verifies an AccountFileReferenceContainer message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an AccountFileReferenceContainer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountFileReferenceContainer
     */
    public static fromObject(object: { [k: string]: any }): AccountFileReferenceContainer;

    /**
     * Creates a plain object from an AccountFileReferenceContainer message. Also converts values to other types if specified.
     * @param message AccountFileReferenceContainer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountFileReferenceContainer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountFileReferenceContainer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace AccountFileReferenceContainer {

    /** Properties of an AnonymousShare. */
    interface IAnonymousShare {

        /**
         * @see AccountFileRecord
         */
        accountFileRecord: IAccountFileRecord;

        /**
         * @see AccountFileReference.key
         */
        key: Uint8Array;
    }

    /** Anonymously shared file data. */
    class AnonymousShare implements IAnonymousShare {

        /**
         * Constructs a new AnonymousShare.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountFileReferenceContainer.IAnonymousShare);

        /**
         * @see AccountFileRecord
         */
        public accountFileRecord: IAccountFileRecord;

        /**
         * @see AccountFileReference.key
         */
        public key: Uint8Array;

        /**
         * Creates a new AnonymousShare instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AnonymousShare instance
         */
        public static create(properties?: AccountFileReferenceContainer.IAnonymousShare): AccountFileReferenceContainer.AnonymousShare;

        /**
         * Encodes the specified AnonymousShare message. Does not implicitly {@link AccountFileReferenceContainer.AnonymousShare.verify|verify} messages.
         * @param message AnonymousShare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountFileReferenceContainer.IAnonymousShare, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AnonymousShare message, length delimited. Does not implicitly {@link AccountFileReferenceContainer.AnonymousShare.verify|verify} messages.
         * @param message AnonymousShare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountFileReferenceContainer.IAnonymousShare, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AnonymousShare message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AnonymousShare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountFileReferenceContainer.AnonymousShare;

        /**
         * Decodes an AnonymousShare message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AnonymousShare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountFileReferenceContainer.AnonymousShare;

        /**
         * Verifies an AnonymousShare message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an AnonymousShare message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AnonymousShare
         */
        public static fromObject(object: { [k: string]: any }): AccountFileReferenceContainer.AnonymousShare;

        /**
         * Creates a plain object from an AnonymousShare message. Also converts values to other types if specified.
         * @param message AnonymousShare
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountFileReferenceContainer.AnonymousShare, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AnonymousShare to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignedShare. */
    interface ISignedShare {

        /**
         * @see AccountFileReference
         */
        accountFileReference: Uint8Array;

        /**
         * @see AccountFileReference.owner
         */
        owner: string;
    }

    /** Signed file data. */
    class SignedShare implements ISignedShare {

        /**
         * Constructs a new SignedShare.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountFileReferenceContainer.ISignedShare);

        /**
         * @see AccountFileReference
         */
        public accountFileReference: Uint8Array;

        /**
         * @see AccountFileReference.owner
         */
        public owner: string;

        /**
         * Creates a new SignedShare instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignedShare instance
         */
        public static create(properties?: AccountFileReferenceContainer.ISignedShare): AccountFileReferenceContainer.SignedShare;

        /**
         * Encodes the specified SignedShare message. Does not implicitly {@link AccountFileReferenceContainer.SignedShare.verify|verify} messages.
         * @param message SignedShare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountFileReferenceContainer.ISignedShare, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignedShare message, length delimited. Does not implicitly {@link AccountFileReferenceContainer.SignedShare.verify|verify} messages.
         * @param message SignedShare message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountFileReferenceContainer.ISignedShare, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignedShare message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignedShare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountFileReferenceContainer.SignedShare;

        /**
         * Decodes a SignedShare message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignedShare
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountFileReferenceContainer.SignedShare;

        /**
         * Verifies a SignedShare message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a SignedShare message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignedShare
         */
        public static fromObject(object: { [k: string]: any }): AccountFileReferenceContainer.SignedShare;

        /**
         * Creates a plain object from a SignedShare message. Also converts values to other types if specified.
         * @param message SignedShare
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountFileReferenceContainer.SignedShare, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignedShare to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of an AccountLoginData. */
export interface IAccountLoginData {

    /** Randomly generated password for database authentication. */
    secondaryPassword: string;

    /** Symmetric key for encrypting user data. */
    symmetricKey: Uint8Array;
}

/** Augmented PAKE login data. */
export class AccountLoginData implements IAccountLoginData {

    /**
     * Constructs a new AccountLoginData.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountLoginData);

    /** Randomly generated password for database authentication. */
    public secondaryPassword: string;

    /** Symmetric key for encrypting user data. */
    public symmetricKey: Uint8Array;

    /**
     * Creates a new AccountLoginData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountLoginData instance
     */
    public static create(properties?: IAccountLoginData): AccountLoginData;

    /**
     * Encodes the specified AccountLoginData message. Does not implicitly {@link AccountLoginData.verify|verify} messages.
     * @param message AccountLoginData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountLoginData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountLoginData message, length delimited. Does not implicitly {@link AccountLoginData.verify|verify} messages.
     * @param message AccountLoginData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountLoginData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountLoginData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountLoginData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountLoginData;

    /**
     * Decodes an AccountLoginData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountLoginData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountLoginData;

    /**
     * Verifies an AccountLoginData message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an AccountLoginData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountLoginData
     */
    public static fromObject(object: { [k: string]: any }): AccountLoginData;

    /**
     * Creates a plain object from an AccountLoginData message. Also converts values to other types if specified.
     * @param message AccountLoginData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountLoginData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountLoginData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AccountUserPresence. */
export interface IAccountUserPresence {

    /** Current presence status. */
    status: AccountUserPresence.Statuses;
}

/** User presence. */
export class AccountUserPresence implements IAccountUserPresence {

    /**
     * Constructs a new AccountUserPresence.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountUserPresence);

    /** Current presence status. */
    public status: AccountUserPresence.Statuses;

    /**
     * Creates a new AccountUserPresence instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountUserPresence instance
     */
    public static create(properties?: IAccountUserPresence): AccountUserPresence;

    /**
     * Encodes the specified AccountUserPresence message. Does not implicitly {@link AccountUserPresence.verify|verify} messages.
     * @param message AccountUserPresence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountUserPresence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountUserPresence message, length delimited. Does not implicitly {@link AccountUserPresence.verify|verify} messages.
     * @param message AccountUserPresence message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountUserPresence, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountUserPresence message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountUserPresence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountUserPresence;

    /**
     * Decodes an AccountUserPresence message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountUserPresence
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountUserPresence;

    /**
     * Verifies an AccountUserPresence message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an AccountUserPresence message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountUserPresence
     */
    public static fromObject(object: { [k: string]: any }): AccountUserPresence;

    /**
     * Creates a plain object from an AccountUserPresence message. Also converts values to other types if specified.
     * @param message AccountUserPresence
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountUserPresence, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountUserPresence to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace AccountUserPresence {

    /** Possible presence statuses. */
    enum Statuses {
        Offline = 0,
        Away = 1,
        Busy = 2,
        Online = 3
    }
}

/** Properties of an AccountUserProfile. */
export interface IAccountUserProfile {

    /** Description. */
    description: string;

    /** Usernames and similar identifiers for external services like social media. */
    externalUsernames?: ({ [k: string]: string }|undefined);

    /** Premium account. */
    hasPremium: boolean;

    /** Full name. */
    name: string;

    /** Username (capitalized according to user preference). */
    realUsername: string;

    /**
     * @see AccountUserTypes
     */
    userType: AccountUserTypes;
}

/** User public profile. */
export class AccountUserProfile implements IAccountUserProfile {

    /**
     * Constructs a new AccountUserProfile.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountUserProfile);

    /** Description. */
    public description: string;

    /** Usernames and similar identifiers for external services like social media. */
    public externalUsernames: { [k: string]: string };

    /** Premium account. */
    public hasPremium: boolean;

    /** Full name. */
    public name: string;

    /** Username (capitalized according to user preference). */
    public realUsername: string;

    /**
     * @see AccountUserTypes
     */
    public userType: AccountUserTypes;

    /**
     * Creates a new AccountUserProfile instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountUserProfile instance
     */
    public static create(properties?: IAccountUserProfile): AccountUserProfile;

    /**
     * Encodes the specified AccountUserProfile message. Does not implicitly {@link AccountUserProfile.verify|verify} messages.
     * @param message AccountUserProfile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountUserProfile message, length delimited. Does not implicitly {@link AccountUserProfile.verify|verify} messages.
     * @param message AccountUserProfile message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountUserProfile, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountUserProfile message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountUserProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountUserProfile;

    /**
     * Decodes an AccountUserProfile message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountUserProfile
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountUserProfile;

    /**
     * Verifies an AccountUserProfile message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an AccountUserProfile message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountUserProfile
     */
    public static fromObject(object: { [k: string]: any }): AccountUserProfile;

    /**
     * Creates a plain object from an AccountUserProfile message. Also converts values to other types if specified.
     * @param message AccountUserProfile
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountUserProfile, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountUserProfile to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an AccountUserProfileExtra. */
export interface IAccountUserProfileExtra {

    /** Physical address. */
    address?: (string|undefined);

    /** Educational history. */
    education?: (AccountUserProfileExtra.IPosition[]|undefined);

    /** Gender. */
    gender?: (string|undefined);

    /** Insurance. */
    insurance?: (string[]|undefined);

    /** Languages. */
    languages?: (AccountUserProfileExtra.ILanguage[]|undefined);

    /** NPI numbers. */
    npis?: (string[]|undefined);

    /** Username of parent organization. */
    organization?: (string|undefined);

    /** Specialties. */
    specialties?: (string[]|undefined);

    /** Work history. */
    work?: (AccountUserProfileExtra.IPosition[]|undefined);
}

/** User public profile additional data. */
export class AccountUserProfileExtra implements IAccountUserProfileExtra {

    /**
     * Constructs a new AccountUserProfileExtra.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountUserProfileExtra);

    /** Physical address. */
    public address: string;

    /** Educational history. */
    public education: AccountUserProfileExtra.IPosition[];

    /** Gender. */
    public gender: string;

    /** Insurance. */
    public insurance: string[];

    /** Languages. */
    public languages: AccountUserProfileExtra.ILanguage[];

    /** NPI numbers. */
    public npis: string[];

    /** Username of parent organization. */
    public organization: string;

    /** Specialties. */
    public specialties: string[];

    /** Work history. */
    public work: AccountUserProfileExtra.IPosition[];

    /**
     * Creates a new AccountUserProfileExtra instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountUserProfileExtra instance
     */
    public static create(properties?: IAccountUserProfileExtra): AccountUserProfileExtra;

    /**
     * Encodes the specified AccountUserProfileExtra message. Does not implicitly {@link AccountUserProfileExtra.verify|verify} messages.
     * @param message AccountUserProfileExtra message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountUserProfileExtra, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountUserProfileExtra message, length delimited. Does not implicitly {@link AccountUserProfileExtra.verify|verify} messages.
     * @param message AccountUserProfileExtra message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountUserProfileExtra, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountUserProfileExtra message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountUserProfileExtra
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountUserProfileExtra;

    /**
     * Decodes an AccountUserProfileExtra message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountUserProfileExtra
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountUserProfileExtra;

    /**
     * Verifies an AccountUserProfileExtra message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an AccountUserProfileExtra message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountUserProfileExtra
     */
    public static fromObject(object: { [k: string]: any }): AccountUserProfileExtra;

    /**
     * Creates a plain object from an AccountUserProfileExtra message. Also converts values to other types if specified.
     * @param message AccountUserProfileExtra
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountUserProfileExtra, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountUserProfileExtra to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace AccountUserProfileExtra {

    /** Properties of a Language. */
    interface ILanguage {

        /** Language name. */
        language?: (string|undefined);

        /**
         * @see Proficiency
         */
        proficiency?: (AccountUserProfileExtra.Proficiency|undefined);
    }

    /** Language skill. */
    class Language implements ILanguage {

        /**
         * Constructs a new Language.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountUserProfileExtra.ILanguage);

        /** Language name. */
        public language: string;

        /**
         * @see Proficiency
         */
        public proficiency: AccountUserProfileExtra.Proficiency;

        /**
         * Creates a new Language instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Language instance
         */
        public static create(properties?: AccountUserProfileExtra.ILanguage): AccountUserProfileExtra.Language;

        /**
         * Encodes the specified Language message. Does not implicitly {@link AccountUserProfileExtra.Language.verify|verify} messages.
         * @param message Language message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountUserProfileExtra.ILanguage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Language message, length delimited. Does not implicitly {@link AccountUserProfileExtra.Language.verify|verify} messages.
         * @param message Language message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountUserProfileExtra.ILanguage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Language message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Language
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountUserProfileExtra.Language;

        /**
         * Decodes a Language message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Language
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountUserProfileExtra.Language;

        /**
         * Verifies a Language message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a Language message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Language
         */
        public static fromObject(object: { [k: string]: any }): AccountUserProfileExtra.Language;

        /**
         * Creates a plain object from a Language message. Also converts values to other types if specified.
         * @param message Language
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountUserProfileExtra.Language, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Language to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Position. */
    interface IPosition {

        /** Extra information (e.g. position title or degree subject). */
        detail?: (string|undefined);

        /** End date timestamp. */
        endDate?: (number|undefined);

        /** Position locationName */
        locationName?: (string|undefined);

        /** Position locationURL */
        locationURL?: (string|undefined);

        /** Start date timestamp. */
        startDate?: (number|undefined);
    }

    /** Any sort of vocational or educational position. */
    class Position implements IPosition {

        /**
         * Constructs a new Position.
         * @param [properties] Properties to set
         */
        constructor(properties?: AccountUserProfileExtra.IPosition);

        /** Extra information (e.g. position title or degree subject). */
        public detail: string;

        /** End date timestamp. */
        public endDate: number;

        /** Position locationName. */
        public locationName: string;

        /** Position locationURL. */
        public locationURL: string;

        /** Start date timestamp. */
        public startDate: number;

        /**
         * Creates a new Position instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Position instance
         */
        public static create(properties?: AccountUserProfileExtra.IPosition): AccountUserProfileExtra.Position;

        /**
         * Encodes the specified Position message. Does not implicitly {@link AccountUserProfileExtra.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: AccountUserProfileExtra.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Position message, length delimited. Does not implicitly {@link AccountUserProfileExtra.Position.verify|verify} messages.
         * @param message Position message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: AccountUserProfileExtra.IPosition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Position message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountUserProfileExtra.Position;

        /**
         * Decodes a Position message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Position
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountUserProfileExtra.Position;

        /**
         * Verifies a Position message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a Position message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Position
         */
        public static fromObject(object: { [k: string]: any }): AccountUserProfileExtra.Position;

        /**
         * Creates a plain object from a Position message. Also converts values to other types if specified.
         * @param message Position
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: AccountUserProfileExtra.Position, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Position to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Level of proficiency in a skill. */
    enum Proficiency {
        Basic = 0,
        Intermediate = 1,
        Fluent = 2,
        Native = 3
    }
}

/** Properties of an AccountUserPublicKeys. */
export interface IAccountUserPublicKeys {

    /** Potassium.Box public key. */
    encryption: Uint8Array;

    /** Potassium.Sign public key. */
    signing: Uint8Array;
}

/** AGSE-PKI certificate. */
export class AccountUserPublicKeys implements IAccountUserPublicKeys {

    /**
     * Constructs a new AccountUserPublicKeys.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAccountUserPublicKeys);

    /** Potassium.Box public key. */
    public encryption: Uint8Array;

    /** Potassium.Sign public key. */
    public signing: Uint8Array;

    /**
     * Creates a new AccountUserPublicKeys instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AccountUserPublicKeys instance
     */
    public static create(properties?: IAccountUserPublicKeys): AccountUserPublicKeys;

    /**
     * Encodes the specified AccountUserPublicKeys message. Does not implicitly {@link AccountUserPublicKeys.verify|verify} messages.
     * @param message AccountUserPublicKeys message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAccountUserPublicKeys, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AccountUserPublicKeys message, length delimited. Does not implicitly {@link AccountUserPublicKeys.verify|verify} messages.
     * @param message AccountUserPublicKeys message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAccountUserPublicKeys, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an AccountUserPublicKeys message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AccountUserPublicKeys
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AccountUserPublicKeys;

    /**
     * Decodes an AccountUserPublicKeys message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AccountUserPublicKeys
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AccountUserPublicKeys;

    /**
     * Verifies an AccountUserPublicKeys message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an AccountUserPublicKeys message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AccountUserPublicKeys
     */
    public static fromObject(object: { [k: string]: any }): AccountUserPublicKeys;

    /**
     * Creates a plain object from an AccountUserPublicKeys message. Also converts values to other types if specified.
     * @param message AccountUserPublicKeys
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AccountUserPublicKeys, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AccountUserPublicKeys to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Account types for different Cyph-based applications. */
export enum AccountUserTypes {
    Standard = 0,
    Org = 1,
    TelehealthAdmin = 2,
    TelehealthDoctor = 3
}

/** Properties of a AGSEPKICert. */
export interface IAGSEPKICert {

    /**
     * @see AccountUserPublicKeys.signing
     */
    agsePKICSR: IAGSEPKICSR;

    /** Timestamp of certificate issuance. */
    timestamp: number;
}

/** AGSE-PKI certificate. */
export class AGSEPKICert implements IAGSEPKICert {

    /**
     * Constructs a new AGSEPKICert.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAGSEPKICert);

    /**
     * @see AccountUserPublicKeys.signing
     */
    public agsePKICSR: IAGSEPKICSR;

    /** Timestamp of certificate issuance. */
    public timestamp: number;

    /**
     * Creates a new AGSEPKICert instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AGSEPKICert instance
     */
    public static create(properties?: IAGSEPKICert): AGSEPKICert;

    /**
     * Encodes the specified AGSEPKICert message. Does not implicitly {@link AGSEPKICert.verify|verify} messages.
     * @param message AGSEPKICert message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAGSEPKICert, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AGSEPKICert message, length delimited. Does not implicitly {@link AGSEPKICert.verify|verify} messages.
     * @param message AGSEPKICert message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAGSEPKICert, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a AGSEPKICert message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AGSEPKICert
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AGSEPKICert;

    /**
     * Decodes a AGSEPKICert message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AGSEPKICert
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AGSEPKICert;

    /**
     * Verifies a AGSEPKICert message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a AGSEPKICert message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AGSEPKICert
     */
    public static fromObject(object: { [k: string]: any }): AGSEPKICert;

    /**
     * Creates a plain object from a AGSEPKICert message. Also converts values to other types if specified.
     * @param message AGSEPKICert
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AGSEPKICert, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AGSEPKICert to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a AGSEPKICSR. */
export interface IAGSEPKICSR {

    /**
     * @see AccountUserPublicKeys.signing
     */
    publicSigningKey: Uint8Array;

    /** Username. */
    username: string;
}

/** AGSE-PKI certificate signing request. */
export class AGSEPKICSR implements IAGSEPKICSR {

    /**
     * Constructs a new AGSEPKICSR.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAGSEPKICSR);

    /**
     * @see AccountUserPublicKeys.signing
     */
    public publicSigningKey: Uint8Array;

    /** Username. */
    public username: string;

    /**
     * Creates a new AGSEPKICSR instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AGSEPKICSR instance
     */
    public static create(properties?: IAGSEPKICSR): AGSEPKICSR;

    /**
     * Encodes the specified AGSEPKICSR message. Does not implicitly {@link AGSEPKICSR.verify|verify} messages.
     * @param message AGSEPKICSR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAGSEPKICSR, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AGSEPKICSR message, length delimited. Does not implicitly {@link AGSEPKICSR.verify|verify} messages.
     * @param message AGSEPKICSR message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAGSEPKICSR, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a AGSEPKICSR message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AGSEPKICSR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AGSEPKICSR;

    /**
     * Decodes a AGSEPKICSR message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AGSEPKICSR
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AGSEPKICSR;

    /**
     * Verifies a AGSEPKICSR message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a AGSEPKICSR message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AGSEPKICSR
     */
    public static fromObject(object: { [k: string]: any }): AGSEPKICSR;

    /**
     * Creates a plain object from a AGSEPKICSR message. Also converts values to other types if specified.
     * @param message AGSEPKICSR
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AGSEPKICSR, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AGSEPKICSR to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a AGSEPKIIssuanceHistory. */
export interface IAGSEPKIIssuanceHistory {

    /** Public key hashes. */
    publicSigningKeyHashes?: ({ [k: string]: boolean }|undefined);

    /** Timestamp. */
    timestamp: number;

    /** Usernames. */
    usernames?: ({ [k: string]: boolean }|undefined);
}

/** AGSE-PKI history of previous issuances. */
export class AGSEPKIIssuanceHistory implements IAGSEPKIIssuanceHistory {

    /**
     * Constructs a new AGSEPKIIssuanceHistory.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAGSEPKIIssuanceHistory);

    /** Public key hashes. */
    public publicSigningKeyHashes: { [k: string]: boolean };

    /** Timestamp. */
    public timestamp: number;

    /** Usernames. */
    public usernames: { [k: string]: boolean };

    /**
     * Creates a new AGSEPKIIssuanceHistory instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AGSEPKIIssuanceHistory instance
     */
    public static create(properties?: IAGSEPKIIssuanceHistory): AGSEPKIIssuanceHistory;

    /**
     * Encodes the specified AGSEPKIIssuanceHistory message. Does not implicitly {@link AGSEPKIIssuanceHistory.verify|verify} messages.
     * @param message AGSEPKIIssuanceHistory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAGSEPKIIssuanceHistory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified AGSEPKIIssuanceHistory message, length delimited. Does not implicitly {@link AGSEPKIIssuanceHistory.verify|verify} messages.
     * @param message AGSEPKIIssuanceHistory message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAGSEPKIIssuanceHistory, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a AGSEPKIIssuanceHistory message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AGSEPKIIssuanceHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): AGSEPKIIssuanceHistory;

    /**
     * Decodes a AGSEPKIIssuanceHistory message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AGSEPKIIssuanceHistory
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): AGSEPKIIssuanceHistory;

    /**
     * Verifies a AGSEPKIIssuanceHistory message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a AGSEPKIIssuanceHistory message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AGSEPKIIssuanceHistory
     */
    public static fromObject(object: { [k: string]: any }): AGSEPKIIssuanceHistory;

    /**
     * Creates a plain object from a AGSEPKIIssuanceHistory message. Also converts values to other types if specified.
     * @param message AGSEPKIIssuanceHistory
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: AGSEPKIIssuanceHistory, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this AGSEPKIIssuanceHistory to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Appointment. */
export interface IAppointment {

    /**
     * @see CalendarInvite
     */
    calendarInvite: ICalendarInvite;

    /** EHR-specific data related to the appointment. */
    data?: (Appointment.IEHR|undefined);

    /** Relevant forms. */
    forms?: (IForm[]|undefined);

    /** Notes taken during the appointment. */
    notes?: (string|undefined);

    /** Confirmation that the appointment occurred. */
    occurred?: (boolean|undefined);

    /** Participant usernames. */
    participants?: (string[]|undefined);

    /** Sub-session ID where RSVP statuses are posted. */
    rsvpSessionSubID: string;
}

/** Appointment. */
export class Appointment implements IAppointment {

    /**
     * Constructs a new Appointment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IAppointment);

    /**
     * @see CalendarInvite
     */
    public calendarInvite: ICalendarInvite;

    /** EHR-specific data related to the appointment. */
    public data?: Appointment.IEHR;

    /** Relevant forms. */
    public forms: IForm[];

    /** Notes taken during the appointment. */
    public notes: string;

    /** Confirmation that the appointment occurred. */
    public occurred: boolean;

    /** Participant usernames. */
    public participants: string[];

    /** Sub-session ID where RSVP statuses are posted. */
    public rsvpSessionSubID: string;

    /**
     * Creates a new Appointment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Appointment instance
     */
    public static create(properties?: IAppointment): Appointment;

    /**
     * Encodes the specified Appointment message. Does not implicitly {@link Appointment.verify|verify} messages.
     * @param message Appointment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IAppointment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Appointment message, length delimited. Does not implicitly {@link Appointment.verify|verify} messages.
     * @param message Appointment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IAppointment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Appointment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Appointment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Appointment;

    /**
     * Decodes an Appointment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Appointment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Appointment;

    /**
     * Verifies an Appointment message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an Appointment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Appointment
     */
    public static fromObject(object: { [k: string]: any }): Appointment;

    /**
     * Creates a plain object from an Appointment message. Also converts values to other types if specified.
     * @param message Appointment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Appointment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Appointment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Appointment {

    /** RSVP statuses. */
    enum RSVP {
        Maybe = 0,
        No = 1,
        Yes = 2
    }

    /** Properties of a EHR. */
    interface IEHR {

        /**
         * An ID that can span several visits often related to the same issue -
         * pregnancy, surgeries, research study, etc.
         */
        accountNumber?: (string|undefined);

        /** ID of the attending provider. This ID is required for Inpatient Visits. */
        attendingProviderID?: (string|undefined);

        /** ID type of the ID for the attending provider. */
        attendingProviderIDType?: (string|undefined);

        /** Full name of the attending provider. */
        attendingProviderName?: (string|undefined);

        /**
         * Patient balance due for this visit. This field depends on whether or not the sending
         * system has billing functionality, and whether they calculate this field.
         */
        balance?: (number|undefined);

        /** Duration of the visit in minutes. */
        duration?: (number|undefined);

        /** Location of the visit. */
        location?: (string|undefined);

        /**
         * Type of location.
         * Examples: Clinic, Department, Home, Nursing Unit, Provider's Office, Phone.
         */
        locationType?: (string|undefined);

        /** Facility. Example: Community Hospital. */
        locationFacility?: (string|undefined);

        /**
         * Patient class is used in many EHRs to determine where to put the patient.
         * Examples: Inpatient, Outpatient, Emergency. (Redox required for Visit).
         */
        patientClass?: (string|undefined);

        /** Reason for the visit. */
        reason?: (string|undefined);

        /** Datetime of visit or the arrival time of the admission. (ISO 8601) */
        visitDateTime?: (number|undefined);

        /** Unique ID of a single visit. */
        visitNumber?: (string|undefined);
    }

    /**
     * * EHR data for the appointment.
     * * TODO: Reconcile with Redox types.
     */
    class EHR implements IEHR {

        /**
         * Constructs a new EHR.
         * @param [properties] Properties to set
         */
        constructor(properties?: Appointment.IEHR);

        /**
         * * An ID that can span several visits often related to the same issue -
         * * pregnancy, surgeries, research study, etc.
         */
        public accountNumber: string;

        /** ID of the attending provider. This ID is required for Inpatient Visits. */
        public attendingProviderID: string;

        /** ID type of the ID for the attending provider. */
        public attendingProviderIDType: string;

        /** Full name of the attending provider. */
        public attendingProviderName: string;

        /**
         * * Patient balance due for this visit. This field depends on whether or not the sending
         * * system has billing functionality, and whether they calculate this field.
         */
        public balance: number;

        /** Duration of the visit in minutes. */
        public duration: number;

        /** Location of the visit. */
        public location: string;

        /**
         * * Type of location.
         * * Examples: Clinic, Department, Home, Nursing Unit, Provider's Office, Phone.
         */
        public locationType: string;

        /** Facility. Example: Community Hospital. */
        public locationFacility: string;

        /**
         * * Patient class is used in many EHRs to determine where to put the patient.
         * * Examples: Inpatient, Outpatient, Emergency. (Redox required for Visit).
         */
        public patientClass: string;

        /** Reason for the visit. */
        public reason: string;

        /** Datetime of visit or the arrival time of the admission. (ISO 8601) */
        public visitDateTime: number;

        /** Unique ID of a single visit. */
        public visitNumber: string;

        /**
         * Creates a new EHR instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EHR instance
         */
        public static create(properties?: Appointment.IEHR): Appointment.EHR;

        /**
         * Encodes the specified EHR message. Does not implicitly {@link Appointment.EHR.verify|verify} messages.
         * @param message EHR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Appointment.IEHR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EHR message, length delimited. Does not implicitly {@link Appointment.EHR.verify|verify} messages.
         * @param message EHR message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Appointment.IEHR, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a EHR message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EHR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Appointment.EHR;

        /**
         * Decodes a EHR message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EHR
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Appointment.EHR;

        /**
         * Verifies a EHR message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a EHR message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EHR
         */
        public static fromObject(object: { [k: string]: any }): Appointment.EHR;

        /**
         * Creates a plain object from a EHR message. Also converts values to other types if specified.
         * @param message EHR
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Appointment.EHR, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EHR to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a CalendarInvite. */
export interface ICalendarInvite {

    /** Preferred days for counteroffers. */
    alternateDays?: ({ [k: string]: boolean }|undefined);

    /** Preferred time frames days for counteroffers. */
    alternateTimeFrames?: ({ [k: string]: boolean }|undefined);

    /**
     * @see CallTypes
     */
    callType: CallTypes;

    /** Event description. */
    description: string;

    /** End timestamp. */
    endTime: number;

    /** Start timestamp. */
    startTime: number;

    /** Event title/subject. */
    title: string;
}

/** Calendar invite. */
export class CalendarInvite implements ICalendarInvite {

    /**
     * Constructs a new CalendarInvite.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICalendarInvite);

    /** Preferred days for counteroffers. */
    public alternateDays: { [k: string]: boolean };

    /** Preferred time frames days for counteroffers. */
    public alternateTimeFrames: { [k: string]: boolean };

    /**
     * @see CallTypes
     */
    public callType: CallTypes;

    /** Event description. */
    public description: string;

    /** End timestamp. */
    public endTime: number;

    /** Start timestamp. */
    public startTime: number;

    /** Event title/subject. */
    public title: string;

    /**
     * Creates a new CalendarInvite instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CalendarInvite instance
     */
    public static create(properties?: ICalendarInvite): CalendarInvite;

    /**
     * Encodes the specified CalendarInvite message. Does not implicitly {@link CalendarInvite.verify|verify} messages.
     * @param message CalendarInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICalendarInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CalendarInvite message, length delimited. Does not implicitly {@link CalendarInvite.verify|verify} messages.
     * @param message CalendarInvite message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICalendarInvite, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CalendarInvite message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CalendarInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CalendarInvite;

    /**
     * Decodes a CalendarInvite message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CalendarInvite
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CalendarInvite;

    /**
     * Verifies a CalendarInvite message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a CalendarInvite message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CalendarInvite
     */
    public static fromObject(object: { [k: string]: any }): CalendarInvite;

    /**
     * Creates a plain object from a CalendarInvite message. Also converts values to other types if specified.
     * @param message CalendarInvite
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CalendarInvite, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CalendarInvite to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace CalendarInvite {

    /** Days of the week for appointments. */
    enum DaysOfWeek {
        Sunday = 0,
        Monday = 1,
        Tuesday = 2,
        Wednesday = 3,
        Thursday = 4,
        Friday = 5,
        Saturday = 6
    }

    /** Time periods of the day for appointments. */
    enum TimeFrames {
        Morning = 0,
        Afternoon = 1,
        Evening = 2
    }
}

/** Call types. */
export enum CallTypes {
    None = 0,
    Audio = 1,
    Video = 2
}

/** Properties of a CastleIncomingMessages. */
export interface ICastleIncomingMessages {

    /** Mapping of message IDs to CastleIncomingMessageItems. */
    incomingMessages?: ({ [k: string]: CastleIncomingMessages.ICastleIncomingMessageItem }|undefined);
}

/** Castle incoming messages. */
export class CastleIncomingMessages implements ICastleIncomingMessages {

    /**
     * Constructs a new CastleIncomingMessages.
     * @param [properties] Properties to set
     */
    constructor(properties?: ICastleIncomingMessages);

    /** Mapping of message IDs to CastleIncomingMessageItems. */
    public incomingMessages: { [k: string]: CastleIncomingMessages.ICastleIncomingMessageItem };

    /**
     * Creates a new CastleIncomingMessages instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CastleIncomingMessages instance
     */
    public static create(properties?: ICastleIncomingMessages): CastleIncomingMessages;

    /**
     * Encodes the specified CastleIncomingMessages message. Does not implicitly {@link CastleIncomingMessages.verify|verify} messages.
     * @param message CastleIncomingMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ICastleIncomingMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified CastleIncomingMessages message, length delimited. Does not implicitly {@link CastleIncomingMessages.verify|verify} messages.
     * @param message CastleIncomingMessages message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ICastleIncomingMessages, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a CastleIncomingMessages message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CastleIncomingMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CastleIncomingMessages;

    /**
     * Decodes a CastleIncomingMessages message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CastleIncomingMessages
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CastleIncomingMessages;

    /**
     * Verifies a CastleIncomingMessages message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a CastleIncomingMessages message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CastleIncomingMessages
     */
    public static fromObject(object: { [k: string]: any }): CastleIncomingMessages;

    /**
     * Creates a plain object from a CastleIncomingMessages message. Also converts values to other types if specified.
     * @param message CastleIncomingMessages
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: CastleIncomingMessages, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this CastleIncomingMessages to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace CastleIncomingMessages {

    /** Properties of a CastleIncomingMessageItem. */
    interface ICastleIncomingMessageItem {

        /**
         * @see CastleIncomingMessageItem
         */
        cyphertexts?: (Uint8Array[]|undefined);
    }

    /** List of received cyphertexts with a particular message ID. */
    class CastleIncomingMessageItem implements ICastleIncomingMessageItem {

        /**
         * Constructs a new CastleIncomingMessageItem.
         * @param [properties] Properties to set
         */
        constructor(properties?: CastleIncomingMessages.ICastleIncomingMessageItem);

        /**
         * @see CastleIncomingMessageItem
         */
        public cyphertexts: Uint8Array[];

        /**
         * Creates a new CastleIncomingMessageItem instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CastleIncomingMessageItem instance
         */
        public static create(properties?: CastleIncomingMessages.ICastleIncomingMessageItem): CastleIncomingMessages.CastleIncomingMessageItem;

        /**
         * Encodes the specified CastleIncomingMessageItem message. Does not implicitly {@link CastleIncomingMessages.CastleIncomingMessageItem.verify|verify} messages.
         * @param message CastleIncomingMessageItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: CastleIncomingMessages.ICastleIncomingMessageItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CastleIncomingMessageItem message, length delimited. Does not implicitly {@link CastleIncomingMessages.CastleIncomingMessageItem.verify|verify} messages.
         * @param message CastleIncomingMessageItem message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: CastleIncomingMessages.ICastleIncomingMessageItem, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CastleIncomingMessageItem message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CastleIncomingMessageItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): CastleIncomingMessages.CastleIncomingMessageItem;

        /**
         * Decodes a CastleIncomingMessageItem message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CastleIncomingMessageItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): CastleIncomingMessages.CastleIncomingMessageItem;

        /**
         * Verifies a CastleIncomingMessageItem message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a CastleIncomingMessageItem message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CastleIncomingMessageItem
         */
        public static fromObject(object: { [k: string]: any }): CastleIncomingMessages.CastleIncomingMessageItem;

        /**
         * Creates a plain object from a CastleIncomingMessageItem message. Also converts values to other types if specified.
         * @param message CastleIncomingMessageItem
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: CastleIncomingMessages.CastleIncomingMessageItem, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CastleIncomingMessageItem to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a ChannelMessage. */
export interface IChannelMessage {

    /** Cyphertext. */
    cyphertext: Uint8Array;

    /** User who sent the message. */
    author: string;
}

/** ChannelService message. */
export class ChannelMessage implements IChannelMessage {

    /**
     * Constructs a new ChannelMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChannelMessage);

    /** Cyphertext. */
    public cyphertext: Uint8Array;

    /** User who sent the message. */
    public author: string;

    /**
     * Creates a new ChannelMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChannelMessage instance
     */
    public static create(properties?: IChannelMessage): ChannelMessage;

    /**
     * Encodes the specified ChannelMessage message. Does not implicitly {@link ChannelMessage.verify|verify} messages.
     * @param message ChannelMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChannelMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChannelMessage message, length delimited. Does not implicitly {@link ChannelMessage.verify|verify} messages.
     * @param message ChannelMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChannelMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChannelMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChannelMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChannelMessage;

    /**
     * Decodes a ChannelMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChannelMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChannelMessage;

    /**
     * Verifies a ChannelMessage message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a ChannelMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChannelMessage
     */
    public static fromObject(object: { [k: string]: any }): ChannelMessage;

    /**
     * Creates a plain object from a ChannelMessage message. Also converts values to other types if specified.
     * @param message ChannelMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChannelMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChannelMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatLastConfirmedMessage. */
export interface IChatLastConfirmedMessage {

    /** Message ID. */
    id: string;

    /** Message index. */
    index: number;
}

/** Chat last confirmed message. */
export class ChatLastConfirmedMessage implements IChatLastConfirmedMessage {

    /**
     * Constructs a new ChatLastConfirmedMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatLastConfirmedMessage);

    /** Message ID. */
    public id: string;

    /** Message index. */
    public index: number;

    /**
     * Creates a new ChatLastConfirmedMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatLastConfirmedMessage instance
     */
    public static create(properties?: IChatLastConfirmedMessage): ChatLastConfirmedMessage;

    /**
     * Encodes the specified ChatLastConfirmedMessage message. Does not implicitly {@link ChatLastConfirmedMessage.verify|verify} messages.
     * @param message ChatLastConfirmedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatLastConfirmedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatLastConfirmedMessage message, length delimited. Does not implicitly {@link ChatLastConfirmedMessage.verify|verify} messages.
     * @param message ChatLastConfirmedMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatLastConfirmedMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatLastConfirmedMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatLastConfirmedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatLastConfirmedMessage;

    /**
     * Decodes a ChatLastConfirmedMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatLastConfirmedMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatLastConfirmedMessage;

    /**
     * Verifies a ChatLastConfirmedMessage message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a ChatLastConfirmedMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatLastConfirmedMessage
     */
    public static fromObject(object: { [k: string]: any }): ChatLastConfirmedMessage;

    /**
     * Creates a plain object from a ChatLastConfirmedMessage message. Also converts values to other types if specified.
     * @param message ChatLastConfirmedMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatLastConfirmedMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatLastConfirmedMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatMessage. */
export interface IChatMessage {

    /** Author user ID. */
    authorID?: (string|undefined);

    /**
     * @see AuthorTypes
     */
    authorType: ChatMessage.AuthorTypes;

    /** Metadata used to estimate message's size for virtual scrolling. */
    dimensions?: (IChatMessageLine[]|undefined);

    /**
     * @see SessionMessageData.id
     */
    id: string;

    /**
     * @see SessionText.selfDestructTimeout
     */
    selfDestructTimeout?: (number|undefined);

    /**
     * @see SessionMessageData.sessionSubID
     */
    sessionSubID?: (string|undefined);

    /**
     * @see SessionMessageData.timestamp
     */
    timestamp: number;

    /**
     * @see ChatMessageValue
     */
    value?: (IChatMessageValue|undefined);
}

/** Represents one message in a chat. */
export class ChatMessage implements IChatMessage {

    /**
     * Constructs a new ChatMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessage);

    /** Author user ID. */
    public authorID: string;

    /**
     * @see AuthorTypes
     */
    public authorType: ChatMessage.AuthorTypes;

    /** Metadata used to estimate message's size for virtual scrolling. */
    public dimensions: IChatMessageLine[];

    /**
     * @see SessionMessageData.id
     */
    public id: string;

    /**
     * @see SessionText.selfDestructTimeout
     */
    public selfDestructTimeout: number;

    /**
     * @see SessionMessageData.sessionSubID
     */
    public sessionSubID: string;

    /**
     * @see SessionMessageData.timestamp
     */
    public timestamp: number;

    /**
     * @see ChatMessageValue
     */
    public value?: IChatMessageValue;

    /**
     * Creates a new ChatMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessage instance
     */
    public static create(properties?: IChatMessage): ChatMessage;

    /**
     * Encodes the specified ChatMessage message. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessage message, length delimited. Does not implicitly {@link ChatMessage.verify|verify} messages.
     * @param message ChatMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessage;

    /**
     * Decodes a ChatMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessage;

    /**
     * Verifies a ChatMessage message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a ChatMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessage
     */
    public static fromObject(object: { [k: string]: any }): ChatMessage;

    /**
     * Creates a plain object from a ChatMessage message. Also converts values to other types if specified.
     * @param message ChatMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ChatMessage {

    /** Author types. */
    enum AuthorTypes {
        App = 0,
        Local = 1,
        Remote = 2
    }
}

/** Properties of a ChatMessageLine. */
export interface IChatMessageLine {

    /** Line height on a big screen. */
    bigScreenHeight: number;

    /** Line width on a big screen. */
    bigScreenWidth: number;

    /** Line height on a small screen. */
    smallScreenHeight: number;

    /** Line width on a small screen. */
    smallScreenWidth: number;
}

/** Dimensions for one message line. */
export class ChatMessageLine implements IChatMessageLine {

    /**
     * Constructs a new ChatMessageLine.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessageLine);

    /** Line height on a big screen. */
    public bigScreenHeight: number;

    /** Line width on a big screen. */
    public bigScreenWidth: number;

    /** Line height on a small screen. */
    public smallScreenHeight: number;

    /** Line width on a small screen. */
    public smallScreenWidth: number;

    /**
     * Creates a new ChatMessageLine instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessageLine instance
     */
    public static create(properties?: IChatMessageLine): ChatMessageLine;

    /**
     * Encodes the specified ChatMessageLine message. Does not implicitly {@link ChatMessageLine.verify|verify} messages.
     * @param message ChatMessageLine message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessageLine, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessageLine message, length delimited. Does not implicitly {@link ChatMessageLine.verify|verify} messages.
     * @param message ChatMessageLine message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatMessageLine, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessageLine message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessageLine
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessageLine;

    /**
     * Decodes a ChatMessageLine message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessageLine
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessageLine;

    /**
     * Verifies a ChatMessageLine message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a ChatMessageLine message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessageLine
     */
    public static fromObject(object: { [k: string]: any }): ChatMessageLine;

    /**
     * Creates a plain object from a ChatMessageLine message. Also converts values to other types if specified.
     * @param message ChatMessageLine
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatMessageLine, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatMessageLine to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a ChatMessageValue. */
export interface IChatMessageValue {

    /** ChatMessageValue calendarInvite */
    calendarInvite?: (ICalendarInvite|undefined);

    /** ChatMessageValue form */
    form?: (IForm|undefined);

    /** ChatMessageValue quill */
    quill?: (Uint8Array|undefined);

    /** ChatMessageValue rsvp */
    rsvp?: (Appointment.RSVP|undefined);

    /** ChatMessageValue text */
    text?: (string|undefined);
}

/** Possible values of a chat text message. */
export class ChatMessageValue implements IChatMessageValue {

    /**
     * Constructs a new ChatMessageValue.
     * @param [properties] Properties to set
     */
    constructor(properties?: IChatMessageValue);

    /** ChatMessageValue calendarInvite. */
    public calendarInvite?: ICalendarInvite;

    /** ChatMessageValue form. */
    public form?: IForm;

    /** ChatMessageValue quill. */
    public quill: Uint8Array;

    /** ChatMessageValue rsvp. */
    public rsvp: Appointment.RSVP;

    /** ChatMessageValue text. */
    public text: string;

    /** Value. */
    public value?: ("calendarInvite"|"form"|"quill"|"rsvp"|"text");

    /**
     * Creates a new ChatMessageValue instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ChatMessageValue instance
     */
    public static create(properties?: IChatMessageValue): ChatMessageValue;

    /**
     * Encodes the specified ChatMessageValue message. Does not implicitly {@link ChatMessageValue.verify|verify} messages.
     * @param message ChatMessageValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IChatMessageValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified ChatMessageValue message, length delimited. Does not implicitly {@link ChatMessageValue.verify|verify} messages.
     * @param message ChatMessageValue message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IChatMessageValue, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a ChatMessageValue message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ChatMessageValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ChatMessageValue;

    /**
     * Decodes a ChatMessageValue message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ChatMessageValue
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ChatMessageValue;

    /**
     * Verifies a ChatMessageValue message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a ChatMessageValue message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ChatMessageValue
     */
    public static fromObject(object: { [k: string]: any }): ChatMessageValue;

    /**
     * Creates a plain object from a ChatMessageValue message. Also converts values to other types if specified.
     * @param message ChatMessageValue
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: ChatMessageValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this ChatMessageValue to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace ChatMessageValue {

    /** Possible types of a chat text message value. */
    enum Types {
        CalendarInvite = 0,
        Form = 1,
        Quill = 2,
        RSVP = 3,
        Text = 4
    }
}

/** Properties of an EhrApiKey. */
export interface IEhrApiKey {

    /** API key. */
    apiKey: string;

    /** Indicates whether this is a master API key. */
    isMaster: boolean;
}

/** An EHR integration API key. */
export class EhrApiKey implements IEhrApiKey {

    /**
     * Constructs a new EhrApiKey.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEhrApiKey);

    /** API key. */
    public apiKey: string;

    /** Indicates whether this is a master API key. */
    public isMaster: boolean;

    /**
     * Creates a new EhrApiKey instance using the specified properties.
     * @param [properties] Properties to set
     * @returns EhrApiKey instance
     */
    public static create(properties?: IEhrApiKey): EhrApiKey;

    /**
     * Encodes the specified EhrApiKey message. Does not implicitly {@link EhrApiKey.verify|verify} messages.
     * @param message EhrApiKey message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEhrApiKey, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified EhrApiKey message, length delimited. Does not implicitly {@link EhrApiKey.verify|verify} messages.
     * @param message EhrApiKey message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEhrApiKey, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an EhrApiKey message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns EhrApiKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): EhrApiKey;

    /**
     * Decodes an EhrApiKey message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns EhrApiKey
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): EhrApiKey;

    /**
     * Verifies an EhrApiKey message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an EhrApiKey message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns EhrApiKey
     */
    public static fromObject(object: { [k: string]: any }): EhrApiKey;

    /**
     * Creates a plain object from an EhrApiKey message. Also converts values to other types if specified.
     * @param message EhrApiKey
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: EhrApiKey, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this EhrApiKey to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of an Environment. */
export interface IEnvironment {

    /**
     * Exists if in a custom build environment.
     * @see CustomBuild
     */
    customBuild?: (Environment.ICustomBuild|undefined);

    /** Name of this environment. */
    envName: string;

    /**
     * @see Firebase
     */
    firebase: Environment.IFirebase;

    /** Indicates whether this is local development environment. */
    local: boolean;

    /** Indicates whether this is prod. */
    production: boolean;

    /** Indicates whether production AGSE-PKI signing keys should be used. */
    useProdSigningKeys?: (boolean|undefined);
}

/** Angular CLI environment configuration. */
export class Environment implements IEnvironment {

    /**
     * Constructs a new Environment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IEnvironment);

    /**
     * * Exists if in a custom build environment.
     * * @see CustomBuild
     */
    public customBuild?: Environment.ICustomBuild;

    /** Name of this environment. */
    public envName: string;

    /**
     * @see Firebase
     */
    public firebase: Environment.IFirebase;

    /** Indicates whether this is local development environment. */
    public local: boolean;

    /** Indicates whether this is prod. */
    public production: boolean;

    /** Indicates whether production AGSE-PKI signing keys should be used. */
    public useProdSigningKeys: boolean;

    /**
     * Creates a new Environment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Environment instance
     */
    public static create(properties?: IEnvironment): Environment;

    /**
     * Encodes the specified Environment message. Does not implicitly {@link Environment.verify|verify} messages.
     * @param message Environment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Environment message, length delimited. Does not implicitly {@link Environment.verify|verify} messages.
     * @param message Environment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IEnvironment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Environment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Environment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Environment;

    /**
     * Decodes an Environment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Environment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Environment;

    /**
     * Verifies an Environment message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an Environment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Environment
     */
    public static fromObject(object: { [k: string]: any }): Environment;

    /**
     * Creates a plain object from an Environment message. Also converts values to other types if specified.
     * @param message Environment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Environment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Environment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Environment {

    /** Properties of a CustomBuild. */
    interface ICustomBuild {

        /** Voice call background image for this custom build. */
        audioImage?: (Uint8Array|undefined);

        /**
         * @see CustomBuildConfig
         */
        config: Environment.ICustomBuildConfig;

        /** Custom styling. */
        css?: (string|undefined);

        /** Walken image replacement for this custom build. */
        errorImage?: (Uint8Array|undefined);

        /** Favicon for this custom build. */
        favicon?: (Uint8Array|undefined);

        /** Identifier of this custom build. */
        id: string;

        /** Horizontal logo for this custom build. */
        logoHorizontal?: (Uint8Array|undefined);

        /** Vertical logo for this custom build. */
        logoVertical?: (Uint8Array|undefined);

        /** Environment namespace, the base ID without branch/version information. */
        namespace: string;

        /** Replacement strings for this custom build. */
        strings?: ({ [k: string]: string }|undefined);
    }

    /** Custom build environment data. */
    class CustomBuild implements ICustomBuild {

        /**
         * Constructs a new CustomBuild.
         * @param [properties] Properties to set
         */
        constructor(properties?: Environment.ICustomBuild);

        /** Voice call background image for this custom build. */
        public audioImage: Uint8Array;

        /**
         * @see CustomBuildConfig
         */
        public config: Environment.ICustomBuildConfig;

        /** Custom styling. */
        public css: string;

        /** Walken image replacement for this custom build. */
        public errorImage: Uint8Array;

        /** Favicon for this custom build. */
        public favicon: Uint8Array;

        /** Identifier of this custom build. */
        public id: string;

        /** Horizontal logo for this custom build. */
        public logoHorizontal: Uint8Array;

        /** Vertical logo for this custom build. */
        public logoVertical: Uint8Array;

        /** Environment namespace, the base ID without branch/version information. */
        public namespace: string;

        /** Replacement strings for this custom build. */
        public strings: { [k: string]: string };

        /**
         * Creates a new CustomBuild instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomBuild instance
         */
        public static create(properties?: Environment.ICustomBuild): Environment.CustomBuild;

        /**
         * Encodes the specified CustomBuild message. Does not implicitly {@link Environment.CustomBuild.verify|verify} messages.
         * @param message CustomBuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Environment.ICustomBuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomBuild message, length delimited. Does not implicitly {@link Environment.CustomBuild.verify|verify} messages.
         * @param message CustomBuild message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Environment.ICustomBuild, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomBuild message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomBuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Environment.CustomBuild;

        /**
         * Decodes a CustomBuild message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomBuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Environment.CustomBuild;

        /**
         * Verifies a CustomBuild message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a CustomBuild message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomBuild
         */
        public static fromObject(object: { [k: string]: any }): Environment.CustomBuild;

        /**
         * Creates a plain object from a CustomBuild message. Also converts values to other types if specified.
         * @param message CustomBuild
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Environment.CustomBuild, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomBuild to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CustomBuildConfig. */
    interface ICustomBuildConfig {

        /** Indicates whether environment should be accounts-only (no ephemeral). */
        accountsOnly?: (boolean|undefined);

        /** Indicates whether this is for a browser extension. */
        browserExtension?: (boolean|undefined);

        /** Optional custom background color. */
        backgroundColor?: (string|undefined);

        /** If true, performs audio call by default. */
        callTypeAudio?: (boolean|undefined);

        /** If true, performs video call by default (takes priority over callTypeAudio). */
        callTypeVideo?: (boolean|undefined);

        /** If true, forces the use of Twilio TURN infrastructure for lower-latency calls. */
        disableP2P?: (boolean|undefined);

        /** Indicates whether docs will be enabled. */
        enableDocs?: (boolean|undefined);

        /** Optional custom foreground color. */
        foregroundColor?: (string|undefined);

        /** If true, locked down with server-stored password. */
        lockedDown?: (boolean|undefined);

        /** Indicates whether native crypto will be used. */
        nativeCrypto?: (boolean|undefined);

        /** Organization username to associate with this custom build. */
        organization?: (string|undefined);

        /** Optional password to lock down environment (not a security feature). */
        password?: (string|undefined);

        /** Indicates whether this is a Cyph Pro environment. */
        pro?: (boolean|undefined);

        /** Indicates whether this is the telehealth version. */
        telehealth?: (boolean|undefined);

        /** Page title of this Cyph instance. */
        title?: (string|undefined);

        /** Indicates whether this environment should share the main Cyph database namespace. */
        usePrimaryNamespace?: (boolean|undefined);

        /** If true, environment will be full white label, with no "Powered by Cyph" notices. */
        whiteLabel?: (boolean|undefined);
    }

    /** Custom build configuration. */
    class CustomBuildConfig implements ICustomBuildConfig {

        /**
         * Constructs a new CustomBuildConfig.
         * @param [properties] Properties to set
         */
        constructor(properties?: Environment.ICustomBuildConfig);

        /** Indicates whether environment should be accounts-only (no ephemeral). */
        public accountsOnly: boolean;

        /** Indicates whether this is for a browser extension. */
        public browserExtension: boolean;

        /** Optional custom background color. */
        public backgroundColor: string;

        /** If true, performs audio call by default. */
        public callTypeAudio: boolean;

        /** If true, performs video call by default (takes priority over callTypeAudio). */
        public callTypeVideo: boolean;

        /** If true, forces the use of Twilio TURN infrastructure for lower-latency calls. */
        public disableP2P: boolean;

        /** Indicates whether docs will be enabled. */
        public enableDocs: boolean;

        /** Optional custom foreground color. */
        public foregroundColor: string;

        /** If true, locked down with server-stored password. */
        public lockedDown: boolean;

        /** Indicates whether native crypto will be used. */
        public nativeCrypto: boolean;

        /** Organization username to associate with this custom build. */
        public organization: string;

        /** Optional password to lock down environment (not a security feature). */
        public password: string;

        /** Indicates whether this is a Cyph Pro environment. */
        public pro: boolean;

        /** Indicates whether this is the telehealth version. */
        public telehealth: boolean;

        /** Page title of this Cyph instance. */
        public title: string;

        /** Indicates whether this environment should share the main Cyph database namespace. */
        public usePrimaryNamespace: boolean;

        /** If true, environment will be full white label, with no "Powered by Cyph" notices. */
        public whiteLabel: boolean;

        /**
         * Creates a new CustomBuildConfig instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CustomBuildConfig instance
         */
        public static create(properties?: Environment.ICustomBuildConfig): Environment.CustomBuildConfig;

        /**
         * Encodes the specified CustomBuildConfig message. Does not implicitly {@link Environment.CustomBuildConfig.verify|verify} messages.
         * @param message CustomBuildConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Environment.ICustomBuildConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CustomBuildConfig message, length delimited. Does not implicitly {@link Environment.CustomBuildConfig.verify|verify} messages.
         * @param message CustomBuildConfig message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Environment.ICustomBuildConfig, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CustomBuildConfig message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CustomBuildConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Environment.CustomBuildConfig;

        /**
         * Decodes a CustomBuildConfig message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CustomBuildConfig
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Environment.CustomBuildConfig;

        /**
         * Verifies a CustomBuildConfig message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a CustomBuildConfig message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CustomBuildConfig
         */
        public static fromObject(object: { [k: string]: any }): Environment.CustomBuildConfig;

        /**
         * Creates a plain object from a CustomBuildConfig message. Also converts values to other types if specified.
         * @param message CustomBuildConfig
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Environment.CustomBuildConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CustomBuildConfig to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Firebase. */
    interface IFirebase {

        /** API key. */
        apiKey: string;

        /** Firebase Cloud Messaging ID. */
        messagingSenderId: string;

        /** Project ID. */
        project: string;
    }

    /** Firebase configuration. */
    class Firebase implements IFirebase {

        /**
         * Constructs a new Firebase.
         * @param [properties] Properties to set
         */
        constructor(properties?: Environment.IFirebase);

        /** API key. */
        public apiKey: string;

        /** Firebase Cloud Messaging ID. */
        public messagingSenderId: string;

        /** Project ID. */
        public project: string;

        /**
         * Creates a new Firebase instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Firebase instance
         */
        public static create(properties?: Environment.IFirebase): Environment.Firebase;

        /**
         * Encodes the specified Firebase message. Does not implicitly {@link Environment.Firebase.verify|verify} messages.
         * @param message Firebase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Environment.IFirebase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Firebase message, length delimited. Does not implicitly {@link Environment.Firebase.verify|verify} messages.
         * @param message Firebase message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Environment.IFirebase, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Firebase message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Firebase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Environment.Firebase;

        /**
         * Decodes a Firebase message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Firebase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Environment.Firebase;

        /**
         * Verifies a Firebase message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a Firebase message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Firebase
         */
        public static fromObject(object: { [k: string]: any }): Environment.Firebase;

        /**
         * Creates a plain object from a Firebase message. Also converts values to other types if specified.
         * @param message Firebase
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Environment.Firebase, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Firebase to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a Form. */
export interface IForm {

    /**
     * @see Component
     */
    components?: (Form.IComponent[]|undefined);

    /** Optional ID. Can be used for associating with fields in other systems. */
    id?: (string|undefined);
}

/** Represents a form that a user can submit responses to. */
export class Form implements IForm {

    /**
     * Constructs a new Form.
     * @param [properties] Properties to set
     */
    constructor(properties?: IForm);

    /**
     * @see Component
     */
    public components: Form.IComponent[];

    /** Optional ID. Can be used for associating with fields in other systems. */
    public id: string;

    /**
     * Creates a new Form instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Form instance
     */
    public static create(properties?: IForm): Form;

    /**
     * Encodes the specified Form message. Does not implicitly {@link Form.verify|verify} messages.
     * @param message Form message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IForm, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Form message, length delimited. Does not implicitly {@link Form.verify|verify} messages.
     * @param message Form message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IForm, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Form message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Form
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Form;

    /**
     * Decodes a Form message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Form
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Form;

    /**
     * Verifies a Form message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a Form message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Form
     */
    public static fromObject(object: { [k: string]: any }): Form;

    /**
     * Creates a plain object from a Form message. Also converts values to other types if specified.
     * @param message Form
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Form, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Form to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Form {

    /** Properties of a Component. */
    interface IComponent {

        /**
         * @see ElementRow
         */
        rows?: (Form.IElementRow[]|undefined);

        /**
         * @see Form.id
         */
        id?: (string|undefined);

        /** Separator for concatenating element values when sending to another system. */
        idSeparator?: (string|undefined);
    }

    /** Reusable building block consisting of multiple forms. */
    class Component implements IComponent {

        /**
         * Constructs a new Component.
         * @param [properties] Properties to set
         */
        constructor(properties?: Form.IComponent);

        /**
         * @see ElementRow
         */
        public rows: Form.IElementRow[];

        /**
         * @see Form.id
         */
        public id: string;

        /** Separator for concatenating element values when sending to another system. */
        public idSeparator: string;

        /**
         * Creates a new Component instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Component instance
         */
        public static create(properties?: Form.IComponent): Form.Component;

        /**
         * Encodes the specified Component message. Does not implicitly {@link Form.Component.verify|verify} messages.
         * @param message Component message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Form.IComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Component message, length delimited. Does not implicitly {@link Form.Component.verify|verify} messages.
         * @param message Component message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Form.IComponent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Component message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Component
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Form.Component;

        /**
         * Decodes a Component message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Component
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Form.Component;

        /**
         * Verifies a Component message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a Component message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Component
         */
        public static fromObject(object: { [k: string]: any }): Form.Component;

        /**
         * Creates a plain object from a Component message. Also converts values to other types if specified.
         * @param message Component
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Form.Component, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Component to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Element. */
    interface IElement {

        /**
         * @see Form.id
         */
        id?: (string|undefined);

        /** Title/label. */
        label?: (string|undefined);

        /** Input mask (serialized with MessagePack). */
        mask?: (Uint8Array|undefined);

        /** Maximum numerical value. */
        max?: (number|undefined);

        /** Minimum numerical value. */
        min?: (number|undefined);

        /** Flex nogrow. */
        noGrow?: (boolean|undefined);

        /** Options to use if type Radio or Select. */
        options?: (string[]|undefined);

        /** Indicates whether required. */
        required?: (boolean|undefined);

        /**
         * @see Type
         */
        type: Form.Element.Types;

        /** Element valueBoolean */
        valueBoolean?: (boolean|undefined);

        /** Element valueNumber */
        valueNumber?: (number|undefined);

        /** Element valueString */
        valueString?: (string|undefined);

        /** Flexbox column width (as a percentage of the total row width). */
        width?: (number|undefined);
    }

    /** One element of a Form, and one column of an ElementRow. */
    class Element implements IElement {

        /**
         * Constructs a new Element.
         * @param [properties] Properties to set
         */
        constructor(properties?: Form.IElement);

        /**
         * @see Form.id
         */
        public id: string;

        /** Title/label. */
        public label: string;

        /** Input mask (serialized with MessagePack). */
        public mask: Uint8Array;

        /** Maximum numerical value. */
        public max: number;

        /** Minimum numerical value. */
        public min: number;

        /** Flex nogrow. */
        public noGrow: boolean;

        /** Options to use if type Radio or Select. */
        public options: string[];

        /** Indicates whether required. */
        public required: boolean;

        /**
         * @see Type
         */
        public type: Form.Element.Types;

        /** Element valueBoolean. */
        public valueBoolean: boolean;

        /** Element valueNumber. */
        public valueNumber: number;

        /** Element valueString. */
        public valueString: string;

        /** Flexbox column width (as a percentage of the total row width). */
        public width: number;

        /** Value. */
        public value?: ("valueBoolean"|"valueNumber"|"valueString");

        /**
         * Creates a new Element instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Element instance
         */
        public static create(properties?: Form.IElement): Form.Element;

        /**
         * Encodes the specified Element message. Does not implicitly {@link Form.Element.verify|verify} messages.
         * @param message Element message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Form.IElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Element message, length delimited. Does not implicitly {@link Form.Element.verify|verify} messages.
         * @param message Element message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Form.IElement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Element message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Element
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Form.Element;

        /**
         * Decodes an Element message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Element
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Form.Element;

        /**
         * Verifies an Element message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an Element message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Element
         */
        public static fromObject(object: { [k: string]: any }): Form.Element;

        /**
         * Creates a plain object from an Element message. Also converts values to other types if specified.
         * @param message Element
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Form.Element, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Element to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Element {

        /** Element input types. */
        enum Types {
            Text = 0,
            Checkbox = 1,
            Datepicker = 2,
            Email = 3,
            Input = 4,
            Number = 5,
            Password = 6,
            Radio = 7,
            Select = 8,
            Slider = 9,
            SlideToggle = 10,
            Textarea = 11,
            Time = 12,
            URL = 13
        }
    }

    /** Properties of an ElementRow. */
    interface IElementRow {

        /**
         * @see Element
         */
        elements?: (Form.IElement[]|undefined);

        /**
         * @see Form.id
         */
        id?: (string|undefined);

        /**
         * @see Component.idSeparator
         */
        idSeparator?: (string|undefined);
    }

    /** Row of elements. */
    class ElementRow implements IElementRow {

        /**
         * Constructs a new ElementRow.
         * @param [properties] Properties to set
         */
        constructor(properties?: Form.IElementRow);

        /**
         * @see Element
         */
        public elements: Form.IElement[];

        /**
         * @see Form.id
         */
        public id: string;

        /**
         * @see Component.idSeparator
         */
        public idSeparator: string;

        /**
         * Creates a new ElementRow instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ElementRow instance
         */
        public static create(properties?: Form.IElementRow): Form.ElementRow;

        /**
         * Encodes the specified ElementRow message. Does not implicitly {@link Form.ElementRow.verify|verify} messages.
         * @param message ElementRow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Form.IElementRow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ElementRow message, length delimited. Does not implicitly {@link Form.ElementRow.verify|verify} messages.
         * @param message ElementRow message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Form.IElementRow, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ElementRow message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ElementRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Form.ElementRow;

        /**
         * Decodes an ElementRow message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ElementRow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Form.ElementRow;

        /**
         * Verifies an ElementRow message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an ElementRow message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ElementRow
         */
        public static fromObject(object: { [k: string]: any }): Form.ElementRow;

        /**
         * Creates a plain object from an ElementRow message. Also converts values to other types if specified.
         * @param message ElementRow
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Form.ElementRow, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ElementRow to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a KeyPair. */
export interface IKeyPair {

    /** Private key. */
    privateKey: Uint8Array;

    /** Public key. */
    publicKey: Uint8Array;
}

/** An asymmetric key pair. */
export class KeyPair implements IKeyPair {

    /**
     * Constructs a new KeyPair.
     * @param [properties] Properties to set
     */
    constructor(properties?: IKeyPair);

    /** Private key. */
    public privateKey: Uint8Array;

    /** Public key. */
    public publicKey: Uint8Array;

    /**
     * Creates a new KeyPair instance using the specified properties.
     * @param [properties] Properties to set
     * @returns KeyPair instance
     */
    public static create(properties?: IKeyPair): KeyPair;

    /**
     * Encodes the specified KeyPair message. Does not implicitly {@link KeyPair.verify|verify} messages.
     * @param message KeyPair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IKeyPair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified KeyPair message, length delimited. Does not implicitly {@link KeyPair.verify|verify} messages.
     * @param message KeyPair message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IKeyPair, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a KeyPair message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns KeyPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): KeyPair;

    /**
     * Decodes a KeyPair message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns KeyPair
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): KeyPair;

    /**
     * Verifies a KeyPair message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a KeyPair message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns KeyPair
     */
    public static fromObject(object: { [k: string]: any }): KeyPair;

    /**
     * Creates a plain object from a KeyPair message. Also converts values to other types if specified.
     * @param message KeyPair
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: KeyPair, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this KeyPair to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Push notification types. */
export enum NotificationTypes {
    Yo = 0,
    File = 1,
    Message = 2
}

/** Properties of a PatientInfo. */
export interface IPatientInfo {

    /** Mapping of contact email addresses to ContactAdditionalData objects. */
    contactAdditionalData?: ({ [k: string]: PatientInfo.IContactAdditionalData }|undefined);

    /** Patient record as synced to/from EHR systems. */
    redoxPatient?: (IRedoxPatient|undefined);
}

/** Patient information for Telehealth. */
export class PatientInfo implements IPatientInfo {

    /**
     * Constructs a new PatientInfo.
     * @param [properties] Properties to set
     */
    constructor(properties?: IPatientInfo);

    /** Mapping of contact email addresses to ContactAdditionalData objects. */
    public contactAdditionalData: { [k: string]: PatientInfo.IContactAdditionalData };

    /** Patient record as synced to/from EHR systems. */
    public redoxPatient?: IRedoxPatient;

    /**
     * Creates a new PatientInfo instance using the specified properties.
     * @param [properties] Properties to set
     * @returns PatientInfo instance
     */
    public static create(properties?: IPatientInfo): PatientInfo;

    /**
     * Encodes the specified PatientInfo message. Does not implicitly {@link PatientInfo.verify|verify} messages.
     * @param message PatientInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified PatientInfo message, length delimited. Does not implicitly {@link PatientInfo.verify|verify} messages.
     * @param message PatientInfo message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IPatientInfo, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a PatientInfo message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns PatientInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PatientInfo;

    /**
     * Decodes a PatientInfo message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns PatientInfo
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PatientInfo;

    /**
     * Verifies a PatientInfo message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a PatientInfo message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns PatientInfo
     */
    public static fromObject(object: { [k: string]: any }): PatientInfo;

    /**
     * Creates a plain object from a PatientInfo message. Also converts values to other types if specified.
     * @param message PatientInfo
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: PatientInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this PatientInfo to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace PatientInfo {

    /** Properties of a ContactAdditionalData. */
    interface IContactAdditionalData {

        /** Whether there is consent to share medical information with the contact. */
        consentToShare?: (boolean|undefined);

        /** Cyph username for the contact if they have one. */
        cyphAccount?: (string|undefined);
    }

    /** Additional data for a contact. */
    class ContactAdditionalData implements IContactAdditionalData {

        /**
         * Constructs a new ContactAdditionalData.
         * @param [properties] Properties to set
         */
        constructor(properties?: PatientInfo.IContactAdditionalData);

        /** Whether there is consent to share medical information with the contact. */
        public consentToShare: boolean;

        /** Cyph username for the contact if they have one. */
        public cyphAccount: string;

        /**
         * Creates a new ContactAdditionalData instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContactAdditionalData instance
         */
        public static create(properties?: PatientInfo.IContactAdditionalData): PatientInfo.ContactAdditionalData;

        /**
         * Encodes the specified ContactAdditionalData message. Does not implicitly {@link PatientInfo.ContactAdditionalData.verify|verify} messages.
         * @param message ContactAdditionalData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: PatientInfo.IContactAdditionalData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContactAdditionalData message, length delimited. Does not implicitly {@link PatientInfo.ContactAdditionalData.verify|verify} messages.
         * @param message ContactAdditionalData message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: PatientInfo.IContactAdditionalData, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContactAdditionalData message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContactAdditionalData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): PatientInfo.ContactAdditionalData;

        /**
         * Decodes a ContactAdditionalData message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContactAdditionalData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): PatientInfo.ContactAdditionalData;

        /**
         * Verifies a ContactAdditionalData message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a ContactAdditionalData message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContactAdditionalData
         */
        public static fromObject(object: { [k: string]: any }): PatientInfo.ContactAdditionalData;

        /**
         * Creates a plain object from a ContactAdditionalData message. Also converts values to other types if specified.
         * @param message ContactAdditionalData
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: PatientInfo.ContactAdditionalData, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContactAdditionalData to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a RedoxAppointment. */
export interface IRedoxAppointment {

    /**
     * @see RedoxTypes.AppointmentInfo
     */
    AppointmentInfo?: (RedoxTypes.IAppointmentInfo[]|undefined);

    /**
     * @see PatientType
     */
    Patient?: (RedoxAppointment.IPatientType|undefined);

    /**
     * @see RedoxTypes.Visit
     */
    Visit?: (RedoxTypes.IVisit[]|undefined);
}

/** @see https://developer.redoxengine.com/data-models/Scheduling.html#New */
export class RedoxAppointment implements IRedoxAppointment {

    /**
     * Constructs a new RedoxAppointment.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedoxAppointment);

    /**
     * @see RedoxTypes.AppointmentInfo
     */
    public AppointmentInfo: RedoxTypes.IAppointmentInfo[];

    /**
     * @see PatientType
     */
    public Patient?: RedoxAppointment.IPatientType;

    /**
     * @see RedoxTypes.Visit
     */
    public Visit: RedoxTypes.IVisit[];

    /**
     * Creates a new RedoxAppointment instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedoxAppointment instance
     */
    public static create(properties?: IRedoxAppointment): RedoxAppointment;

    /**
     * Encodes the specified RedoxAppointment message. Does not implicitly {@link RedoxAppointment.verify|verify} messages.
     * @param message RedoxAppointment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedoxAppointment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RedoxAppointment message, length delimited. Does not implicitly {@link RedoxAppointment.verify|verify} messages.
     * @param message RedoxAppointment message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRedoxAppointment, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedoxAppointment message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedoxAppointment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxAppointment;

    /**
     * Decodes a RedoxAppointment message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RedoxAppointment
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxAppointment;

    /**
     * Verifies a RedoxAppointment message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a RedoxAppointment message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RedoxAppointment
     */
    public static fromObject(object: { [k: string]: any }): RedoxAppointment;

    /**
     * Creates a plain object from a RedoxAppointment message. Also converts values to other types if specified.
     * @param message RedoxAppointment
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RedoxAppointment, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RedoxAppointment to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace RedoxAppointment {

    /** Properties of a PatientType. */
    interface IPatientType {

        /**
         * @see RedoxPatient.Demographics
         */
        Demographics?: (RedoxTypes.IDemographics|undefined);

        /**
         * @see RedoxPatient.Identifiers
         */
        Identifiers?: (RedoxTypes.IIdentifier[]|undefined);

        /**
         * @see RedoxPatient.Notes
         */
        Notes?: (string[]|undefined);
    }

    /** Patient data. */
    class PatientType implements IPatientType {

        /**
         * Constructs a new PatientType.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxAppointment.IPatientType);

        /**
         * @see RedoxPatient.Demographics
         */
        public Demographics?: RedoxTypes.IDemographics;

        /**
         * @see RedoxPatient.Identifiers
         */
        public Identifiers: RedoxTypes.IIdentifier[];

        /**
         * @see RedoxPatient.Notes
         */
        public Notes: string[];

        /**
         * Creates a new PatientType instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PatientType instance
         */
        public static create(properties?: RedoxAppointment.IPatientType): RedoxAppointment.PatientType;

        /**
         * Encodes the specified PatientType message. Does not implicitly {@link RedoxAppointment.PatientType.verify|verify} messages.
         * @param message PatientType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxAppointment.IPatientType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PatientType message, length delimited. Does not implicitly {@link RedoxAppointment.PatientType.verify|verify} messages.
         * @param message PatientType message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxAppointment.IPatientType, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PatientType message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PatientType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxAppointment.PatientType;

        /**
         * Decodes a PatientType message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PatientType
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxAppointment.PatientType;

        /**
         * Verifies a PatientType message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a PatientType message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PatientType
         */
        public static fromObject(object: { [k: string]: any }): RedoxAppointment.PatientType;

        /**
         * Creates a plain object from a PatientType message. Also converts values to other types if specified.
         * @param message PatientType
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxAppointment.PatientType, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PatientType to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a RedoxClinicalSummary. */
export interface IRedoxClinicalSummary {

    /** List of patient's allergies. */
    allergies?: (RedoxTypes.IAllergy[]|undefined);
}

/**
 * @see https://developer.redoxengine.com/data-models/ClinicalSummary.html#PatientQueryResponse
 * TODO: Finish this.
 */
export class RedoxClinicalSummary implements IRedoxClinicalSummary {

    /**
     * Constructs a new RedoxClinicalSummary.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedoxClinicalSummary);

    /** List of patient's allergies. */
    public allergies: RedoxTypes.IAllergy[];

    /**
     * Creates a new RedoxClinicalSummary instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedoxClinicalSummary instance
     */
    public static create(properties?: IRedoxClinicalSummary): RedoxClinicalSummary;

    /**
     * Encodes the specified RedoxClinicalSummary message. Does not implicitly {@link RedoxClinicalSummary.verify|verify} messages.
     * @param message RedoxClinicalSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedoxClinicalSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RedoxClinicalSummary message, length delimited. Does not implicitly {@link RedoxClinicalSummary.verify|verify} messages.
     * @param message RedoxClinicalSummary message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRedoxClinicalSummary, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedoxClinicalSummary message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedoxClinicalSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxClinicalSummary;

    /**
     * Decodes a RedoxClinicalSummary message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RedoxClinicalSummary
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxClinicalSummary;

    /**
     * Verifies a RedoxClinicalSummary message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a RedoxClinicalSummary message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RedoxClinicalSummary
     */
    public static fromObject(object: { [k: string]: any }): RedoxClinicalSummary;

    /**
     * Creates a plain object from a RedoxClinicalSummary message. Also converts values to other types if specified.
     * @param message RedoxClinicalSummary
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RedoxClinicalSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RedoxClinicalSummary to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RedoxPatient. */
export interface IRedoxPatient {

    /** List of (emergency) contacts for the patient. */
    Contacts?: (RedoxTypes.IContact[]|undefined);

    /** Descriptive patient information - modeled from Redox. */
    Demographics?: (RedoxTypes.IDemographics|undefined);

    /** Patient identifiers. */
    Identifiers?: (RedoxTypes.IIdentifier[]|undefined);

    /** List of insurance(s) for the patient. */
    Insurances?: (RedoxTypes.IInsurance[]|undefined);

    /** List of patient-level notes. */
    Notes?: (string[]|undefined);

    /** Patient's Primary Care Provider. */
    PCP?: (RedoxTypes.IPCP|undefined);
}

/** @see https://developer.redoxengine.com/data-models/PatientSearch.html#Response */
export class RedoxPatient implements IRedoxPatient {

    /**
     * Constructs a new RedoxPatient.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedoxPatient);

    /** List of (emergency) contacts for the patient. */
    public Contacts: RedoxTypes.IContact[];

    /** Descriptive patient information - modeled from Redox. */
    public Demographics?: RedoxTypes.IDemographics;

    /** Patient identifiers. */
    public Identifiers: RedoxTypes.IIdentifier[];

    /** List of insurance(s) for the patient. */
    public Insurances: RedoxTypes.IInsurance[];

    /** List of patient-level notes. */
    public Notes: string[];

    /** Patient's Primary Care Provider. */
    public PCP?: RedoxTypes.IPCP;

    /**
     * Creates a new RedoxPatient instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedoxPatient instance
     */
    public static create(properties?: IRedoxPatient): RedoxPatient;

    /**
     * Encodes the specified RedoxPatient message. Does not implicitly {@link RedoxPatient.verify|verify} messages.
     * @param message RedoxPatient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedoxPatient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RedoxPatient message, length delimited. Does not implicitly {@link RedoxPatient.verify|verify} messages.
     * @param message RedoxPatient message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRedoxPatient, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedoxPatient message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedoxPatient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxPatient;

    /**
     * Decodes a RedoxPatient message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RedoxPatient
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxPatient;

    /**
     * Verifies a RedoxPatient message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a RedoxPatient message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RedoxPatient
     */
    public static fromObject(object: { [k: string]: any }): RedoxPatient;

    /**
     * Creates a plain object from a RedoxPatient message. Also converts values to other types if specified.
     * @param message RedoxPatient
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RedoxPatient, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RedoxPatient to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a RedoxTypes. */
export interface IRedoxTypes {
}

/** Redox data types. */
export class RedoxTypes implements IRedoxTypes {

    /**
     * Constructs a new RedoxTypes.
     * @param [properties] Properties to set
     */
    constructor(properties?: IRedoxTypes);

    /**
     * Creates a new RedoxTypes instance using the specified properties.
     * @param [properties] Properties to set
     * @returns RedoxTypes instance
     */
    public static create(properties?: IRedoxTypes): RedoxTypes;

    /**
     * Encodes the specified RedoxTypes message. Does not implicitly {@link RedoxTypes.verify|verify} messages.
     * @param message RedoxTypes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IRedoxTypes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified RedoxTypes message, length delimited. Does not implicitly {@link RedoxTypes.verify|verify} messages.
     * @param message RedoxTypes message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IRedoxTypes, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a RedoxTypes message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns RedoxTypes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes;

    /**
     * Decodes a RedoxTypes message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns RedoxTypes
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes;

    /**
     * Verifies a RedoxTypes message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a RedoxTypes message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns RedoxTypes
     */
    public static fromObject(object: { [k: string]: any }): RedoxTypes;

    /**
     * Creates a plain object from a RedoxTypes message. Also converts values to other types if specified.
     * @param message RedoxTypes
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: RedoxTypes, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this RedoxTypes to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace RedoxTypes {

    /** Properties of an Address. */
    interface IAddress {

        /** City for the address, e.g. McLean. */
        City?: (string|undefined);

        /** Country for the address, e.g. US. */
        Country?: (string|undefined);

        /** County for the address, e.g. Fairfax. */
        County?: (string|undefined);

        /** State for the address, e.g. VA. */
        State?: (string|undefined);

        /** Street address for the address, e.g. 6885 Elm Street. */
        StreetAddress?: (string|undefined);

        /** 5 digit zip code for the address, e.g. 22101. */
        ZIP?: (string|undefined);
    }

    /** Address / Physical Location. */
    class Address implements IAddress {

        /**
         * Constructs a new Address.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IAddress);

        /** City for the address, e.g. McLean. */
        public City: string;

        /** Country for the address, e.g. US. */
        public Country: string;

        /** County for the address, e.g. Fairfax. */
        public County: string;

        /** State for the address, e.g. VA. */
        public State: string;

        /** Street address for the address, e.g. 6885 Elm Street. */
        public StreetAddress: string;

        /** 5 digit zip code for the address, e.g. 22101. */
        public ZIP: string;

        /**
         * Creates a new Address instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Address instance
         */
        public static create(properties?: RedoxTypes.IAddress): RedoxTypes.Address;

        /**
         * Encodes the specified Address message. Does not implicitly {@link RedoxTypes.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Address message, length delimited. Does not implicitly {@link RedoxTypes.Address.verify|verify} messages.
         * @param message Address message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Address message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Address;

        /**
         * Decodes an Address message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Address
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Address;

        /**
         * Verifies an Address message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an Address message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Address
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.Address;

        /**
         * Creates a plain object from an Address message. Also converts values to other types if specified.
         * @param message Address
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.Address, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Address to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Allergy. */
    interface IAllergy {

        /** Free text comment about the allergy. */
        Comment?: (string|undefined);

        /** Represents the gravity of potential risk for future life-threatening reactions. */
        Criticality?: (RedoxTypes.Allergy.ICodedValue|undefined);

        /** When the allergy was no longer a problem (if applicable). (ISO 8601) */
        EndDate?: (string|undefined);

        /** List of reactions that occur when the allergen is introduced. */
        Reaction?: (RedoxTypes.Allergy.IReactionType[]|undefined);

        /** Describes the severity of the reaction. */
        Severity?: (RedoxTypes.Allergy.ICodedValue|undefined);

        /** Date the allergy was identified. (ISO 8601) */
        StartDate?: (string|undefined);

        /** Describes the current status of the allergy (active, historic, etc.). */
        Status?: (RedoxTypes.Allergy.ICodedValue|undefined);

        /** Describes the substance that causes the allergy. Typically RxNorm or SNOMED. */
        Substance?: (RedoxTypes.Allergy.ICodedValue|undefined);

        /** Describes the type of allergy intolerance this is (food, drug, etc.). */
        Type?: (RedoxTypes.Allergy.ICodedValue|undefined);
    }

    /** An allergy to a medication, food, or substance. */
    class Allergy implements IAllergy {

        /**
         * Constructs a new Allergy.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IAllergy);

        /** Free text comment about the allergy. */
        public Comment: string;

        /** Represents the gravity of potential risk for future life-threatening reactions. */
        public Criticality?: RedoxTypes.Allergy.ICodedValue;

        /** When the allergy was no longer a problem (if applicable). (ISO 8601) */
        public EndDate: string;

        /** List of reactions that occur when the allergen is introduced. */
        public Reaction: RedoxTypes.Allergy.IReactionType[];

        /** Describes the severity of the reaction. */
        public Severity?: RedoxTypes.Allergy.ICodedValue;

        /** Date the allergy was identified. (ISO 8601) */
        public StartDate: string;

        /** Describes the current status of the allergy (active, historic, etc.). */
        public Status?: RedoxTypes.Allergy.ICodedValue;

        /** Describes the substance that causes the allergy. Typically RxNorm or SNOMED. */
        public Substance?: RedoxTypes.Allergy.ICodedValue;

        /** Describes the type of allergy intolerance this is (food, drug, etc.). */
        public Type?: RedoxTypes.Allergy.ICodedValue;

        /**
         * Creates a new Allergy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Allergy instance
         */
        public static create(properties?: RedoxTypes.IAllergy): RedoxTypes.Allergy;

        /**
         * Encodes the specified Allergy message. Does not implicitly {@link RedoxTypes.Allergy.verify|verify} messages.
         * @param message Allergy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IAllergy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Allergy message, length delimited. Does not implicitly {@link RedoxTypes.Allergy.verify|verify} messages.
         * @param message Allergy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IAllergy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Allergy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Allergy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Allergy;

        /**
         * Decodes an Allergy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Allergy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Allergy;

        /**
         * Verifies an Allergy message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an Allergy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Allergy
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.Allergy;

        /**
         * Creates a plain object from an Allergy message. Also converts values to other types if specified.
         * @param message Allergy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.Allergy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Allergy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Allergy {

        /** Properties of a CodedValue. */
        interface ICodedValue {

            /** Code value. */
            Code?: (string|undefined);

            /** ID of the coding system to which the code belongs in OID format. */
            CodeSystem?: (string|undefined);

            /**
             * Coding system to which the code belogs.
             * (e.g. SNOMED CT, LOINC, RxNorm, CVX, ICD9, ICD10)
             */
            CodeSystemName?: (string|undefined);

            /** Name of the code value. */
            Name?: (string|undefined);
        }

        /** A value represented by some code. */
        class CodedValue implements ICodedValue {

            /**
             * Constructs a new CodedValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: RedoxTypes.Allergy.ICodedValue);

            /** Code value. */
            public Code: string;

            /** ID of the coding system to which the code belongs in OID format. */
            public CodeSystem: string;

            /**
             * * Coding system to which the code belogs.
             * * (e.g. SNOMED CT, LOINC, RxNorm, CVX, ICD9, ICD10)
             */
            public CodeSystemName: string;

            /** Name of the code value. */
            public Name: string;

            /**
             * Creates a new CodedValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CodedValue instance
             */
            public static create(properties?: RedoxTypes.Allergy.ICodedValue): RedoxTypes.Allergy.CodedValue;

            /**
             * Encodes the specified CodedValue message. Does not implicitly {@link RedoxTypes.Allergy.CodedValue.verify|verify} messages.
             * @param message CodedValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: RedoxTypes.Allergy.ICodedValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CodedValue message, length delimited. Does not implicitly {@link RedoxTypes.Allergy.CodedValue.verify|verify} messages.
             * @param message CodedValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: RedoxTypes.Allergy.ICodedValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CodedValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CodedValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Allergy.CodedValue;

            /**
             * Decodes a CodedValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CodedValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Allergy.CodedValue;

            /**
             * Verifies a CodedValue message.
             * @param message Plain object to verify
             * @returns `undefined` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|undefined);

            /**
             * Creates a CodedValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CodedValue
             */
            public static fromObject(object: { [k: string]: any }): RedoxTypes.Allergy.CodedValue;

            /**
             * Creates a plain object from a CodedValue message. Also converts values to other types if specified.
             * @param message CodedValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: RedoxTypes.Allergy.CodedValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CodedValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ReactionType. */
        interface IReactionType {

            /**
             * @see CodedValue.Code
             */
            Code?: (string|undefined);

            /**
             * @see CodedValue.CodeSystem
             */
            CodeSystem?: (string|undefined);

            /**
             * @see CodedValue.CodeSystemName
             */
            CodeSystemName?: (string|undefined);

            /**
             * @see CodedValue.Name
             */
            Name?: (string|undefined);

            /** Severity. */
            Severity?: (RedoxTypes.Allergy.ICodedValue|undefined);

            /**
             * Free text form of reactions to this substance.
             * Includes information that cannot be captured by coded value.
             */
            Text?: (string|undefined);
        }

        /** A reaction that occurs when the allergen is introduced. */
        class ReactionType implements IReactionType {

            /**
             * Constructs a new ReactionType.
             * @param [properties] Properties to set
             */
            constructor(properties?: RedoxTypes.Allergy.IReactionType);

            /**
             * @see CodedValue.Code
             */
            public Code: string;

            /**
             * @see CodedValue.CodeSystem
             */
            public CodeSystem: string;

            /**
             * @see CodedValue.CodeSystemName
             */
            public CodeSystemName: string;

            /**
             * @see CodedValue.Name
             */
            public Name: string;

            /** Severity. */
            public Severity?: RedoxTypes.Allergy.ICodedValue;

            /**
             * * Free text form of reactions to this substance.
             * * Includes information that cannot be captured by coded value.
             */
            public Text: string;

            /**
             * Creates a new ReactionType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ReactionType instance
             */
            public static create(properties?: RedoxTypes.Allergy.IReactionType): RedoxTypes.Allergy.ReactionType;

            /**
             * Encodes the specified ReactionType message. Does not implicitly {@link RedoxTypes.Allergy.ReactionType.verify|verify} messages.
             * @param message ReactionType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: RedoxTypes.Allergy.IReactionType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ReactionType message, length delimited. Does not implicitly {@link RedoxTypes.Allergy.ReactionType.verify|verify} messages.
             * @param message ReactionType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: RedoxTypes.Allergy.IReactionType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ReactionType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ReactionType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Allergy.ReactionType;

            /**
             * Decodes a ReactionType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ReactionType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Allergy.ReactionType;

            /**
             * Verifies a ReactionType message.
             * @param message Plain object to verify
             * @returns `undefined` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|undefined);

            /**
             * Creates a ReactionType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ReactionType
             */
            public static fromObject(object: { [k: string]: any }): RedoxTypes.Allergy.ReactionType;

            /**
             * Creates a plain object from a ReactionType message. Also converts values to other types if specified.
             * @param message ReactionType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: RedoxTypes.Allergy.ReactionType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ReactionType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of an AppointmentInfo. */
    interface IAppointmentInfo {

        /** Code for the information element. */
        Code?: (string|undefined);

        /** Code set used to identify the information element. */
        Codeset?: (string|undefined);

        /** Description of the information element. */
        Description?: (string|undefined);

        /** The value of the corresponding AppointmentInfo code. */
        Value?: (string|undefined);
    }

    /** List of supplementary clinical information associated with the appointment. */
    class AppointmentInfo implements IAppointmentInfo {

        /**
         * Constructs a new AppointmentInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IAppointmentInfo);

        /** Code for the information element. */
        public Code: string;

        /** Code set used to identify the information element. */
        public Codeset: string;

        /** Description of the information element. */
        public Description: string;

        /** The value of the corresponding AppointmentInfo code. */
        public Value: string;

        /**
         * Creates a new AppointmentInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AppointmentInfo instance
         */
        public static create(properties?: RedoxTypes.IAppointmentInfo): RedoxTypes.AppointmentInfo;

        /**
         * Encodes the specified AppointmentInfo message. Does not implicitly {@link RedoxTypes.AppointmentInfo.verify|verify} messages.
         * @param message AppointmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IAppointmentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AppointmentInfo message, length delimited. Does not implicitly {@link RedoxTypes.AppointmentInfo.verify|verify} messages.
         * @param message AppointmentInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IAppointmentInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AppointmentInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AppointmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.AppointmentInfo;

        /**
         * Decodes an AppointmentInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AppointmentInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.AppointmentInfo;

        /**
         * Verifies an AppointmentInfo message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an AppointmentInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AppointmentInfo
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.AppointmentInfo;

        /**
         * Creates a plain object from an AppointmentInfo message. Also converts values to other types if specified.
         * @param message AppointmentInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.AppointmentInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AppointmentInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CodesetValue. */
    interface ICodesetValue {

        /** Code for the information element. */
        Code?: (string|undefined);

        /** Code set used to identify the information element. */
        Codeset?: (string|undefined);

        /** Name. */
        Name?: (string|undefined);

        /** Type. */
        Type?: (string|undefined);
    }

    /** A value represented by some code and codeset. */
    class CodesetValue implements ICodesetValue {

        /**
         * Constructs a new CodesetValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.ICodesetValue);

        /** Code for the information element. */
        public Code: string;

        /** Code set used to identify the information element. */
        public Codeset: string;

        /** Name. */
        public Name: string;

        /** Type. */
        public Type: string;

        /**
         * Creates a new CodesetValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CodesetValue instance
         */
        public static create(properties?: RedoxTypes.ICodesetValue): RedoxTypes.CodesetValue;

        /**
         * Encodes the specified CodesetValue message. Does not implicitly {@link RedoxTypes.CodesetValue.verify|verify} messages.
         * @param message CodesetValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.ICodesetValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CodesetValue message, length delimited. Does not implicitly {@link RedoxTypes.CodesetValue.verify|verify} messages.
         * @param message CodesetValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.ICodesetValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CodesetValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CodesetValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.CodesetValue;

        /**
         * Decodes a CodesetValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CodesetValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.CodesetValue;

        /**
         * Verifies a CodesetValue message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a CodesetValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CodesetValue
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.CodesetValue;

        /**
         * Creates a plain object from a CodesetValue message. Also converts values to other types if specified.
         * @param message CodesetValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.CodesetValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CodesetValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Contact. */
    interface IContact {

        /**
         * @see Address
         */
        Address?: (RedoxTypes.IAddress|undefined);

        /** List of emails for the contact. */
        EmailAddresses?: (string[]|undefined);

        /** First name. */
        FirstName?: (string|undefined);

        /** Last name. */
        LastName?: (string|undefined);

        /** Middle name - multiple middle names concatenated into this field. */
        MiddleName?: (string|undefined);

        /**
         * @see PhoneNumber
         */
        PhoneNumber?: (RedoxTypes.IPhoneNumber|undefined);

        /** Personal relationship to the patient. e.g. Father, Spouse. */
        RelationToPatient?: (string|undefined);

        /** Role of this contact for the patient. e.g. Employer, Emergency Contact. */
        Roles?: (string[]|undefined);
    }

    /** Emergency Contact for the patient. */
    class Contact implements IContact {

        /**
         * Constructs a new Contact.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IContact);

        /**
         * @see Address
         */
        public Address?: RedoxTypes.IAddress;

        /** List of emails for the contact. */
        public EmailAddresses: string[];

        /** First name. */
        public FirstName: string;

        /** Last name. */
        public LastName: string;

        /** Middle name - multiple middle names concatenated into this field. */
        public MiddleName: string;

        /**
         * @see PhoneNumber
         */
        public PhoneNumber?: RedoxTypes.IPhoneNumber;

        /** Personal relationship to the patient. e.g. Father, Spouse. */
        public RelationToPatient: string;

        /** Role of this contact for the patient. e.g. Employer, Emergency Contact. */
        public Roles: string[];

        /**
         * Creates a new Contact instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Contact instance
         */
        public static create(properties?: RedoxTypes.IContact): RedoxTypes.Contact;

        /**
         * Encodes the specified Contact message. Does not implicitly {@link RedoxTypes.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Contact message, length delimited. Does not implicitly {@link RedoxTypes.Contact.verify|verify} messages.
         * @param message Contact message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IContact, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Contact message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Contact;

        /**
         * Decodes a Contact message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Contact
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Contact;

        /**
         * Verifies a Contact message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a Contact message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Contact
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.Contact;

        /**
         * Creates a plain object from a Contact message. Also converts values to other types if specified.
         * @param message Contact
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.Contact, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Contact to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Demographics. */
    interface IDemographics {

        /** The patient's address. */
        Address?: (RedoxTypes.IAddress|undefined);

        /** Reference: http://www.nationsonline.org/oneworld/country_code_list.htm */
        Citizenship?: (string[]|undefined);

        /** Date and time the patient was proclaimed deceased. (ISO 8601) */
        DeathDateTime?: (string|undefined);

        /** Patient's date of birth. (ISO 8601) */
        DOB?: (string|undefined);

        /** List of emails for the patient. */
        EmailAddresses?: (string[]|undefined);

        /** First name. */
        FirstName?: (string|undefined);

        /** He's dead, Jim. */
        IsDeceased?: (boolean|undefined);

        /** Is the patient hispanic? */
        IsHispanic?: (boolean|undefined);

        /** Patient's primary spoken language. In ISO 639-1 alpha values (e.g. 'en'). */
        Language?: (string|undefined);

        /** Last name. */
        LastName?: (string|undefined);

        /** Supported values: http://www.hl7.org/FHIR/v2/0002/index.html */
        MaritalStatus?: (string|undefined);

        /** Middle name - multiple middle names concatenated into this field. */
        MiddleName?: (string|undefined);

        /**
         * @see PhoneNumber
         */
        PhoneNumber?: (RedoxTypes.IPhoneNumber|undefined);

        /** The patient's race. */
        Race?: (string|undefined);

        /**
         * The patient's sex.
         * One of the following: "Female", "Male", "Unknown", "Other" (Redox).
         */
        Sex?: (string|undefined);

        /** The patient's social security number. */
        SSN?: (string|undefined);
    }

    /** Descriptive patient information - modeled from Redox. */
    class Demographics implements IDemographics {

        /**
         * Constructs a new Demographics.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IDemographics);

        /** The patient's address. */
        public Address?: RedoxTypes.IAddress;

        /** Reference: http://www.nationsonline.org/oneworld/country_code_list.htm */
        public Citizenship: string[];

        /** Date and time the patient was proclaimed deceased. (ISO 8601) */
        public DeathDateTime: string;

        /** Patient's date of birth. (ISO 8601) */
        public DOB: string;

        /** List of emails for the patient. */
        public EmailAddresses: string[];

        /** First name. */
        public FirstName: string;

        /** He's dead, Jim. */
        public IsDeceased: boolean;

        /** Is the patient hispanic? */
        public IsHispanic: boolean;

        /** Patient's primary spoken language. In ISO 639-1 alpha values (e.g. 'en'). */
        public Language: string;

        /** Last name. */
        public LastName: string;

        /** Supported values: http://www.hl7.org/FHIR/v2/0002/index.html */
        public MaritalStatus: string;

        /** Middle name - multiple middle names concatenated into this field. */
        public MiddleName: string;

        /**
         * @see PhoneNumber
         */
        public PhoneNumber?: RedoxTypes.IPhoneNumber;

        /** The patient's race. */
        public Race: string;

        /**
         * * The patient's sex.
         * * One of the following: "Female", "Male", "Unknown", "Other" (Redox).
         */
        public Sex: string;

        /** The patient's social security number. */
        public SSN: string;

        /**
         * Creates a new Demographics instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Demographics instance
         */
        public static create(properties?: RedoxTypes.IDemographics): RedoxTypes.Demographics;

        /**
         * Encodes the specified Demographics message. Does not implicitly {@link RedoxTypes.Demographics.verify|verify} messages.
         * @param message Demographics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IDemographics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Demographics message, length delimited. Does not implicitly {@link RedoxTypes.Demographics.verify|verify} messages.
         * @param message Demographics message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IDemographics, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Demographics message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Demographics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Demographics;

        /**
         * Decodes a Demographics message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Demographics
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Demographics;

        /**
         * Verifies a Demographics message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a Demographics message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Demographics
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.Demographics;

        /**
         * Creates a plain object from a Demographics message. Also converts values to other types if specified.
         * @param message Demographics
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.Demographics, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Demographics to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Identifier. */
    interface IIdentifier {

        /** Unique ID value. */
        ID: string;

        /** Type of ID. e.g. MRN, EPI. */
        IDType: string;
    }

    /** Identifiers - from Redox. */
    class Identifier implements IIdentifier {

        /**
         * Constructs a new Identifier.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IIdentifier);

        /** Unique ID value. */
        public ID: string;

        /** Type of ID. e.g. MRN, EPI. */
        public IDType: string;

        /**
         * Creates a new Identifier instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Identifier instance
         */
        public static create(properties?: RedoxTypes.IIdentifier): RedoxTypes.Identifier;

        /**
         * Encodes the specified Identifier message. Does not implicitly {@link RedoxTypes.Identifier.verify|verify} messages.
         * @param message Identifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Identifier message, length delimited. Does not implicitly {@link RedoxTypes.Identifier.verify|verify} messages.
         * @param message Identifier message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IIdentifier, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Identifier message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Identifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Identifier;

        /**
         * Decodes an Identifier message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Identifier
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Identifier;

        /**
         * Verifies an Identifier message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an Identifier message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Identifier
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.Identifier;

        /**
         * Creates a plain object from an Identifier message. Also converts values to other types if specified.
         * @param message Identifier
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.Identifier, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Identifier to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Insurance. */
    interface IInsurance {

        /**
         * Type of insurance agreement.
         * One of the following: "Standard", "Unified", "Maternity" (Redox).
         */
        AgreementType?: (string|undefined);

        /**
         * @see CompanyType
         */
        Company?: (RedoxTypes.Insurance.ICompanyType|undefined);

        /**
         * Type of insurance agreement. Indicates who will be receiving the bill for the service.
         * One of the following: "Patient", "Clinic", "Insurance", "Other" (Redox).
         */
        CoverageType?: (string|undefined);

        /** Effective date of this insurance policy. (Redox uses YYYY-MM-DD). */
        EffectiveDate?: (string|undefined);

        /** Expiration date of this insurance policy. (Redox uses YYYY-MM-DD). */
        ExpirationDate?: (string|undefined);

        /** Insurance policy group name. */
        GroupName?: (string|undefined);

        /** Insurance policy group number. */
        GroupNumber?: (string|undefined);

        /**
         * @see InsuredType
         */
        Insured?: (RedoxTypes.Insurance.IInsuredType|undefined);

        /** Insurance member number. */
        MemberNumber?: (string|undefined);

        /**
         * @see PlanType
         */
        Plan?: (RedoxTypes.Insurance.IPlanType|undefined);

        /** Insurance policy number. */
        PolicyNumber?: (string|undefined);
    }

    /** Patient's insurance info. */
    class Insurance implements IInsurance {

        /**
         * Constructs a new Insurance.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IInsurance);

        /**
         * * Type of insurance agreement.
         * * One of the following: "Standard", "Unified", "Maternity" (Redox).
         */
        public AgreementType: string;

        /**
         * @see CompanyType
         */
        public Company?: RedoxTypes.Insurance.ICompanyType;

        /**
         * * Type of insurance agreement. Indicates who will be receiving the bill for the service.
         * * One of the following: "Patient", "Clinic", "Insurance", "Other" (Redox).
         */
        public CoverageType: string;

        /** Effective date of this insurance policy. (Redox uses YYYY-MM-DD). */
        public EffectiveDate: string;

        /** Expiration date of this insurance policy. (Redox uses YYYY-MM-DD). */
        public ExpirationDate: string;

        /** Insurance policy group name. */
        public GroupName: string;

        /** Insurance policy group number. */
        public GroupNumber: string;

        /**
         * @see InsuredType
         */
        public Insured?: RedoxTypes.Insurance.IInsuredType;

        /** Insurance member number. */
        public MemberNumber: string;

        /**
         * @see PlanType
         */
        public Plan?: RedoxTypes.Insurance.IPlanType;

        /** Insurance policy number. */
        public PolicyNumber: string;

        /**
         * Creates a new Insurance instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Insurance instance
         */
        public static create(properties?: RedoxTypes.IInsurance): RedoxTypes.Insurance;

        /**
         * Encodes the specified Insurance message. Does not implicitly {@link RedoxTypes.Insurance.verify|verify} messages.
         * @param message Insurance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IInsurance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Insurance message, length delimited. Does not implicitly {@link RedoxTypes.Insurance.verify|verify} messages.
         * @param message Insurance message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IInsurance, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Insurance message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Insurance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Insurance;

        /**
         * Decodes an Insurance message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Insurance
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Insurance;

        /**
         * Verifies an Insurance message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an Insurance message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Insurance
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.Insurance;

        /**
         * Creates a plain object from an Insurance message. Also converts values to other types if specified.
         * @param message Insurance
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.Insurance, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Insurance to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace Insurance {

        /** Properties of a CompanyType. */
        interface ICompanyType {

            /**
             * @see Address
             */
            Address?: (RedoxTypes.IAddress|undefined);

            /** ID of insurance company (payor). */
            ID?: (string|undefined);

            /** ID type of insurance company (payor). */
            IDType?: (string|undefined);

            /** Name of insurance company (payor). */
            Name?: (string|undefined);

            /** Insurance company's phone number. In E. 164 Format (i.e. +16085551234). */
            PhoneNumber?: (string|undefined);
        }

        /** The insurance company. */
        class CompanyType implements ICompanyType {

            /**
             * Constructs a new CompanyType.
             * @param [properties] Properties to set
             */
            constructor(properties?: RedoxTypes.Insurance.ICompanyType);

            /**
             * @see Address
             */
            public Address?: RedoxTypes.IAddress;

            /** ID of insurance company (payor). */
            public ID: string;

            /** ID type of insurance company (payor). */
            public IDType: string;

            /** Name of insurance company (payor). */
            public Name: string;

            /** Insurance company's phone number. In E. 164 Format (i.e. +16085551234). */
            public PhoneNumber: string;

            /**
             * Creates a new CompanyType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CompanyType instance
             */
            public static create(properties?: RedoxTypes.Insurance.ICompanyType): RedoxTypes.Insurance.CompanyType;

            /**
             * Encodes the specified CompanyType message. Does not implicitly {@link RedoxTypes.Insurance.CompanyType.verify|verify} messages.
             * @param message CompanyType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: RedoxTypes.Insurance.ICompanyType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CompanyType message, length delimited. Does not implicitly {@link RedoxTypes.Insurance.CompanyType.verify|verify} messages.
             * @param message CompanyType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: RedoxTypes.Insurance.ICompanyType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CompanyType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CompanyType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Insurance.CompanyType;

            /**
             * Decodes a CompanyType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CompanyType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Insurance.CompanyType;

            /**
             * Verifies a CompanyType message.
             * @param message Plain object to verify
             * @returns `undefined` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|undefined);

            /**
             * Creates a CompanyType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CompanyType
             */
            public static fromObject(object: { [k: string]: any }): RedoxTypes.Insurance.CompanyType;

            /**
             * Creates a plain object from a CompanyType message. Also converts values to other types if specified.
             * @param message CompanyType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: RedoxTypes.Insurance.CompanyType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CompanyType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an InsuredType. */
        interface IInsuredType {

            /**
             * @see Address
             */
            Address?: (RedoxTypes.IAddress|undefined);

            /** Insurance policy holder's date of birth. (ISO 8601) */
            DOB?: (string|undefined);

            /** First name. */
            FirstName?: (string|undefined);

            /** Last name. */
            LastName?: (string|undefined);

            /**
             * Relationship of the insured to the patient.
             * One of the following: "Self", "Spouse", "Other" (Redox).
             */
            Relationship?: (string|undefined);

            /**
             * Insurance policy holder's sex.
             * One of the following: "Female", "Male", "Unknown", "Other" (Redox).
             */
            Sex?: (string|undefined);
        }

        /** Individual who has the agreement with the insurance company for the related policy. */
        class InsuredType implements IInsuredType {

            /**
             * Constructs a new InsuredType.
             * @param [properties] Properties to set
             */
            constructor(properties?: RedoxTypes.Insurance.IInsuredType);

            /**
             * @see Address
             */
            public Address?: RedoxTypes.IAddress;

            /** Insurance policy holder's date of birth. (ISO 8601) */
            public DOB: string;

            /** First name. */
            public FirstName: string;

            /** Last name. */
            public LastName: string;

            /**
             * * Relationship of the insured to the patient.
             * * One of the following: "Self", "Spouse", "Other" (Redox).
             */
            public Relationship: string;

            /**
             * * Insurance policy holder's sex.
             * * One of the following: "Female", "Male", "Unknown", "Other" (Redox).
             */
            public Sex: string;

            /**
             * Creates a new InsuredType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns InsuredType instance
             */
            public static create(properties?: RedoxTypes.Insurance.IInsuredType): RedoxTypes.Insurance.InsuredType;

            /**
             * Encodes the specified InsuredType message. Does not implicitly {@link RedoxTypes.Insurance.InsuredType.verify|verify} messages.
             * @param message InsuredType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: RedoxTypes.Insurance.IInsuredType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified InsuredType message, length delimited. Does not implicitly {@link RedoxTypes.Insurance.InsuredType.verify|verify} messages.
             * @param message InsuredType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: RedoxTypes.Insurance.IInsuredType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an InsuredType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns InsuredType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Insurance.InsuredType;

            /**
             * Decodes an InsuredType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns InsuredType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Insurance.InsuredType;

            /**
             * Verifies an InsuredType message.
             * @param message Plain object to verify
             * @returns `undefined` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|undefined);

            /**
             * Creates an InsuredType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns InsuredType
             */
            public static fromObject(object: { [k: string]: any }): RedoxTypes.Insurance.InsuredType;

            /**
             * Creates a plain object from an InsuredType message. Also converts values to other types if specified.
             * @param message InsuredType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: RedoxTypes.Insurance.InsuredType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this InsuredType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PlanType. */
        interface IPlanType {

            /** Identifier of insurance plan. */
            ID?: (string|undefined);

            /** ID type of insurance plan. */
            IDType?: (string|undefined);

            /** Name of insurance plan. */
            Name?: (string|undefined);

            /** Type of insurance plan. */
            Type?: (string|undefined);
        }

        /** The insurance plan. */
        class PlanType implements IPlanType {

            /**
             * Constructs a new PlanType.
             * @param [properties] Properties to set
             */
            constructor(properties?: RedoxTypes.Insurance.IPlanType);

            /** Identifier of insurance plan. */
            public ID: string;

            /** ID type of insurance plan. */
            public IDType: string;

            /** Name of insurance plan. */
            public Name: string;

            /** Type of insurance plan. */
            public Type: string;

            /**
             * Creates a new PlanType instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PlanType instance
             */
            public static create(properties?: RedoxTypes.Insurance.IPlanType): RedoxTypes.Insurance.PlanType;

            /**
             * Encodes the specified PlanType message. Does not implicitly {@link RedoxTypes.Insurance.PlanType.verify|verify} messages.
             * @param message PlanType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: RedoxTypes.Insurance.IPlanType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PlanType message, length delimited. Does not implicitly {@link RedoxTypes.Insurance.PlanType.verify|verify} messages.
             * @param message PlanType message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: RedoxTypes.Insurance.IPlanType, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PlanType message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PlanType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Insurance.PlanType;

            /**
             * Decodes a PlanType message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PlanType
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Insurance.PlanType;

            /**
             * Verifies a PlanType message.
             * @param message Plain object to verify
             * @returns `undefined` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|undefined);

            /**
             * Creates a PlanType message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PlanType
             */
            public static fromObject(object: { [k: string]: any }): RedoxTypes.Insurance.PlanType;

            /**
             * Creates a plain object from a PlanType message. Also converts values to other types if specified.
             * @param message PlanType
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: RedoxTypes.Insurance.PlanType, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PlanType to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a Location. */
    interface ILocation {

        /** Department. */
        Department?: (string|undefined);

        /** e.g. Community Hospital. */
        Facility?: (string|undefined);

        /** e.g. 136. */
        Room?: (string|undefined);

        /** e.g. Clinic, Department, Home, Nursing Unit, Provider's Office, Phone. */
        Type?: (string|undefined);
    }

    /** Location details. */
    class Location implements ILocation {

        /**
         * Constructs a new Location.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.ILocation);

        /** Department. */
        public Department: string;

        /** e.g. Community Hospital. */
        public Facility: string;

        /** e.g. 136. */
        public Room: string;

        /** e.g. Clinic, Department, Home, Nursing Unit, Provider's Office, Phone. */
        public Type: string;

        /**
         * Creates a new Location instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Location instance
         */
        public static create(properties?: RedoxTypes.ILocation): RedoxTypes.Location;

        /**
         * Encodes the specified Location message. Does not implicitly {@link RedoxTypes.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Location message, length delimited. Does not implicitly {@link RedoxTypes.Location.verify|verify} messages.
         * @param message Location message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Location message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Location;

        /**
         * Decodes a Location message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Location
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Location;

        /**
         * Verifies a Location message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a Location message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Location
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.Location;

        /**
         * Creates a plain object from a Location message. Also converts values to other types if specified.
         * @param message Location
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Location to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PCP. */
    interface IPCP {

        /**
         * @see Provider.Address
         */
        Address?: (RedoxTypes.IAddress|undefined);

        /**
         * @see Provider.Credentials
         */
        Credentials?: (string[]|undefined);

        /**
         * @see Provider.FirstName
         */
        FirstName?: (string|undefined);

        /**
         * @see Provider.ID
         */
        ID: string;

        /**
         * @see Provider.IDType
         */
        IDType: string;

        /**
         * @see Provider.LastName
         */
        LastName?: (string|undefined);

        /**
         * @see Provider.Location
         */
        Location?: (RedoxTypes.ILocation|undefined);

        /** National Provider Identifier for the primary care provider. */
        NPI?: (string|undefined);

        /**
         * @see Provider.PhoneNumber
         */
        PhoneNumber?: (RedoxTypes.IPhoneNumber|undefined);
    }

    /** Primary Care Provider for the Patient. */
    class PCP implements IPCP {

        /**
         * Constructs a new PCP.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IPCP);

        /**
         * @see Provider.Address
         */
        public Address?: RedoxTypes.IAddress;

        /**
         * @see Provider.Credentials
         */
        public Credentials: string[];

        /**
         * @see Provider.FirstName
         */
        public FirstName: string;

        /**
         * @see Provider.ID
         */
        public ID: string;

        /**
         * @see Provider.IDType
         */
        public IDType: string;

        /**
         * @see Provider.LastName
         */
        public LastName: string;

        /**
         * @see Provider.Location
         */
        public Location?: RedoxTypes.ILocation;

        /** National Provider Identifier for the primary care provider. */
        public NPI: string;

        /**
         * @see Provider.PhoneNumber
         */
        public PhoneNumber?: RedoxTypes.IPhoneNumber;

        /**
         * Creates a new PCP instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PCP instance
         */
        public static create(properties?: RedoxTypes.IPCP): RedoxTypes.PCP;

        /**
         * Encodes the specified PCP message. Does not implicitly {@link RedoxTypes.PCP.verify|verify} messages.
         * @param message PCP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IPCP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PCP message, length delimited. Does not implicitly {@link RedoxTypes.PCP.verify|verify} messages.
         * @param message PCP message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IPCP, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PCP message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PCP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.PCP;

        /**
         * Decodes a PCP message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PCP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.PCP;

        /**
         * Verifies a PCP message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a PCP message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PCP
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.PCP;

        /**
         * Creates a plain object from a PCP message. Also converts values to other types if specified.
         * @param message PCP
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.PCP, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PCP to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Provider. */
    interface IProvider {

        /**
         * @see Address
         */
        Address?: (RedoxTypes.IAddress|undefined);

        /** e.g. M.D., Psy.D. */
        Credentials?: (string[]|undefined);

        /** First name. */
        FirstName?: (string|undefined);

        /** Unique ID value. */
        ID: string;

        /** Type of ID. e.g. MRN, EPI. */
        IDType: string;

        /** Last name. */
        LastName?: (string|undefined);

        /**
         * @see Location
         */
        Location?: (RedoxTypes.ILocation|undefined);

        /**
         * @see PhoneNumber
         */
        PhoneNumber?: (RedoxTypes.IPhoneNumber|undefined);
    }

    /** A care provider. */
    class Provider implements IProvider {

        /**
         * Constructs a new Provider.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IProvider);

        /**
         * @see Address
         */
        public Address?: RedoxTypes.IAddress;

        /** e.g. M.D., Psy.D. */
        public Credentials: string[];

        /** First name. */
        public FirstName: string;

        /** Unique ID value. */
        public ID: string;

        /** Type of ID. e.g. MRN, EPI. */
        public IDType: string;

        /** Last name. */
        public LastName: string;

        /**
         * @see Location
         */
        public Location?: RedoxTypes.ILocation;

        /**
         * @see PhoneNumber
         */
        public PhoneNumber?: RedoxTypes.IPhoneNumber;

        /**
         * Creates a new Provider instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Provider instance
         */
        public static create(properties?: RedoxTypes.IProvider): RedoxTypes.Provider;

        /**
         * Encodes the specified Provider message. Does not implicitly {@link RedoxTypes.Provider.verify|verify} messages.
         * @param message Provider message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IProvider, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Provider message, length delimited. Does not implicitly {@link RedoxTypes.Provider.verify|verify} messages.
         * @param message Provider message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IProvider, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Provider message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Provider
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Provider;

        /**
         * Decodes a Provider message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Provider
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Provider;

        /**
         * Verifies a Provider message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a Provider message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Provider
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.Provider;

        /**
         * Creates a plain object from a Provider message. Also converts values to other types if specified.
         * @param message Provider
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.Provider, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Provider to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PhoneNumber. */
    interface IPhoneNumber {

        /** Home phone number. */
        Home?: (string|undefined);

        /** Mobile phone number. */
        Mobile?: (string|undefined);

        /** Office phone number. */
        Office?: (string|undefined);
    }

    /** Someone's phone number. */
    class PhoneNumber implements IPhoneNumber {

        /**
         * Constructs a new PhoneNumber.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IPhoneNumber);

        /** Home phone number. */
        public Home: string;

        /** Mobile phone number. */
        public Mobile: string;

        /** Office phone number. */
        public Office: string;

        /**
         * Creates a new PhoneNumber instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PhoneNumber instance
         */
        public static create(properties?: RedoxTypes.IPhoneNumber): RedoxTypes.PhoneNumber;

        /**
         * Encodes the specified PhoneNumber message. Does not implicitly {@link RedoxTypes.PhoneNumber.verify|verify} messages.
         * @param message PhoneNumber message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PhoneNumber message, length delimited. Does not implicitly {@link RedoxTypes.PhoneNumber.verify|verify} messages.
         * @param message PhoneNumber message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IPhoneNumber, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.PhoneNumber;

        /**
         * Decodes a PhoneNumber message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PhoneNumber
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.PhoneNumber;

        /**
         * Verifies a PhoneNumber message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a PhoneNumber message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PhoneNumber
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.PhoneNumber;

        /**
         * Creates a plain object from a PhoneNumber message. Also converts values to other types if specified.
         * @param message PhoneNumber
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.PhoneNumber, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PhoneNumber to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Visit. */
    interface IVisit {

        /**
         * An ID that can span several visits often related to the same issue.
         * (Pregnancy, surgeries, research study, etc.)
         */
        AccountNumber?: (string|undefined);

        /** Attending provider. */
        AttendingProvider?: (RedoxTypes.IProvider|undefined);

        /** Consulting provider. */
        ConsultingProvider?: (RedoxTypes.IProvider|undefined);

        /** List of diagnoses associated with this visit. */
        Diagnoses?: (RedoxTypes.ICodesetValue[]|undefined);

        /** Duration in minutes. */
        Duration?: (number|undefined);

        /** Appointment instructions. */
        Instructions?: (string[]|undefined);

        /** Location. */
        Location?: (RedoxTypes.ILocation|undefined);

        /**
         * Patient class is used in many EHRs to determine where to put the patient.
         * e.g. Outpatient, Hosptial Outpatient Department.
         */
        PatientClass?: (string|undefined);

        /** Reason for appointment. */
        Reason?: (string|undefined);

        /** Referring provider. */
        ReferringProvider?: (RedoxTypes.IProvider|undefined);

        /**
         * One of the following: Scheduled, Arrived, Completed, Canceled,
         * Left without being seen, No show.
         */
        Status?: (string|undefined);

        /** Datetime. (ISO 8601) */
        VisitDateTime?: (string|undefined);

        /** Unique ID of a single visit. */
        VisitNumber?: (string|undefined);

        /** Visit provider. */
        VisitProvider?: (RedoxTypes.IProvider|undefined);
    }

    /** Visit metadata. */
    class Visit implements IVisit {

        /**
         * Constructs a new Visit.
         * @param [properties] Properties to set
         */
        constructor(properties?: RedoxTypes.IVisit);

        /**
         * * An ID that can span several visits often related to the same issue.
         * * (Pregnancy, surgeries, research study, etc.)
         */
        public AccountNumber: string;

        /** Attending provider. */
        public AttendingProvider?: RedoxTypes.IProvider;

        /** Consulting provider. */
        public ConsultingProvider?: RedoxTypes.IProvider;

        /** List of diagnoses associated with this visit. */
        public Diagnoses: RedoxTypes.ICodesetValue[];

        /** Duration in minutes. */
        public Duration: number;

        /** Appointment instructions. */
        public Instructions: string[];

        /** Location. */
        public Location?: RedoxTypes.ILocation;

        /**
         * * Patient class is used in many EHRs to determine where to put the patient.
         * * e.g. Outpatient, Hosptial Outpatient Department.
         */
        public PatientClass: string;

        /** Reason for appointment. */
        public Reason: string;

        /** Referring provider. */
        public ReferringProvider?: RedoxTypes.IProvider;

        /**
         * * One of the following: Scheduled, Arrived, Completed, Canceled,
         * * Left without being seen, No show.
         */
        public Status: string;

        /** Datetime. (ISO 8601) */
        public VisitDateTime: string;

        /** Unique ID of a single visit. */
        public VisitNumber: string;

        /** Visit provider. */
        public VisitProvider?: RedoxTypes.IProvider;

        /**
         * Creates a new Visit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Visit instance
         */
        public static create(properties?: RedoxTypes.IVisit): RedoxTypes.Visit;

        /**
         * Encodes the specified Visit message. Does not implicitly {@link RedoxTypes.Visit.verify|verify} messages.
         * @param message Visit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: RedoxTypes.IVisit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Visit message, length delimited. Does not implicitly {@link RedoxTypes.Visit.verify|verify} messages.
         * @param message Visit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: RedoxTypes.IVisit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Visit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Visit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): RedoxTypes.Visit;

        /**
         * Decodes a Visit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Visit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): RedoxTypes.Visit;

        /**
         * Verifies a Visit message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a Visit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Visit
         */
        public static fromObject(object: { [k: string]: any }): RedoxTypes.Visit;

        /**
         * Creates a plain object from a Visit message. Also converts values to other types if specified.
         * @param message Visit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: RedoxTypes.Visit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Visit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Properties of a Review. */
export interface IReview {

    /** A rating between 0 and 100. */
    rating: number;

    /** Review text. */
    text?: (string|undefined);

    /** Timestamp of this review. */
    timestamp: number;
}

/** A review of something. */
export class Review implements IReview {

    /**
     * Constructs a new Review.
     * @param [properties] Properties to set
     */
    constructor(properties?: IReview);

    /** A rating between 0 and 100. */
    public rating: number;

    /** Review text. */
    public text: string;

    /** Timestamp of this review. */
    public timestamp: number;

    /**
     * Creates a new Review instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Review instance
     */
    public static create(properties?: IReview): Review;

    /**
     * Encodes the specified Review message. Does not implicitly {@link Review.verify|verify} messages.
     * @param message Review message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IReview, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Review message, length delimited. Does not implicitly {@link Review.verify|verify} messages.
     * @param message Review message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IReview, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a Review message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Review
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Review;

    /**
     * Decodes a Review message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Review
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Review;

    /**
     * Verifies a Review message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a Review message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Review
     */
    public static fromObject(object: { [k: string]: any }): Review;

    /**
     * Creates a plain object from a Review message. Also converts values to other types if specified.
     * @param message Review
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Review, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Review to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SessionCapabilities. */
export interface ISessionCapabilities {

    /** P2P networking / WebRTC. */
    p2p: boolean;

    /** Walkie talkie mode active by default. */
    walkieTalkieMode: boolean;
}

/** A set of supported capabilities. */
export class SessionCapabilities implements ISessionCapabilities {

    /**
     * Constructs a new SessionCapabilities.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISessionCapabilities);

    /** P2P networking / WebRTC. */
    public p2p: boolean;

    /** Walkie talkie mode active by default. */
    public walkieTalkieMode: boolean;

    /**
     * Creates a new SessionCapabilities instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SessionCapabilities instance
     */
    public static create(properties?: ISessionCapabilities): SessionCapabilities;

    /**
     * Encodes the specified SessionCapabilities message. Does not implicitly {@link SessionCapabilities.verify|verify} messages.
     * @param message SessionCapabilities message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISessionCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SessionCapabilities message, length delimited. Does not implicitly {@link SessionCapabilities.verify|verify} messages.
     * @param message SessionCapabilities message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISessionCapabilities, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SessionCapabilities message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SessionCapabilities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SessionCapabilities;

    /**
     * Decodes a SessionCapabilities message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SessionCapabilities
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SessionCapabilities;

    /**
     * Verifies a SessionCapabilities message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a SessionCapabilities message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SessionCapabilities
     */
    public static fromObject(object: { [k: string]: any }): SessionCapabilities;

    /**
     * Creates a plain object from a SessionCapabilities message. Also converts values to other types if specified.
     * @param message SessionCapabilities
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SessionCapabilities, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SessionCapabilities to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SessionChatState. */
export interface ISessionChatState {

    /** Indicates whether this party is actively typing. */
    isTyping: boolean;
}

/** Misc information about the state of a chat. */
export class SessionChatState implements ISessionChatState {

    /**
     * Constructs a new SessionChatState.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISessionChatState);

    /** Indicates whether this party is actively typing. */
    public isTyping: boolean;

    /**
     * Creates a new SessionChatState instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SessionChatState instance
     */
    public static create(properties?: ISessionChatState): SessionChatState;

    /**
     * Encodes the specified SessionChatState message. Does not implicitly {@link SessionChatState.verify|verify} messages.
     * @param message SessionChatState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISessionChatState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SessionChatState message, length delimited. Does not implicitly {@link SessionChatState.verify|verify} messages.
     * @param message SessionChatState message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISessionChatState, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SessionChatState message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SessionChatState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SessionChatState;

    /**
     * Decodes a SessionChatState message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SessionChatState
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SessionChatState;

    /**
     * Verifies a SessionChatState message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a SessionChatState message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SessionChatState
     */
    public static fromObject(object: { [k: string]: any }): SessionChatState;

    /**
     * Creates a plain object from a SessionChatState message. Also converts values to other types if specified.
     * @param message SessionChatState
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SessionChatState, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SessionChatState to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SessionCommand. */
export interface ISessionCommand {

    /** Used to ensure that the command is being run in the correct context (e.g. P2P session). */
    additionalData?: (string|undefined);

    /** Argument to pass to method (serialized with MessagePack). */
    argument?: (Uint8Array|undefined);

    /** Method name. */
    method: string;
}

/** Contains an RPC call for a specific method. */
export class SessionCommand implements ISessionCommand {

    /**
     * Constructs a new SessionCommand.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISessionCommand);

    /** Used to ensure that the command is being run in the correct context (e.g. P2P session). */
    public additionalData: string;

    /** Argument to pass to method (serialized with MessagePack). */
    public argument: Uint8Array;

    /** Method name. */
    public method: string;

    /**
     * Creates a new SessionCommand instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SessionCommand instance
     */
    public static create(properties?: ISessionCommand): SessionCommand;

    /**
     * Encodes the specified SessionCommand message. Does not implicitly {@link SessionCommand.verify|verify} messages.
     * @param message SessionCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISessionCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SessionCommand message, length delimited. Does not implicitly {@link SessionCommand.verify|verify} messages.
     * @param message SessionCommand message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISessionCommand, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SessionCommand message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SessionCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SessionCommand;

    /**
     * Decodes a SessionCommand message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SessionCommand
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SessionCommand;

    /**
     * Verifies a SessionCommand message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a SessionCommand message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SessionCommand
     */
    public static fromObject(object: { [k: string]: any }): SessionCommand;

    /**
     * Creates a plain object from a SessionCommand message. Also converts values to other types if specified.
     * @param message SessionCommand
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SessionCommand, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SessionCommand to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SessionMessage. */
export interface ISessionMessage {

    /** Event name (e.g. "text"). */
    event: string;

    /** Associated data (e.g. a user-facing chat message). */
    data: ISessionMessageData;
}

/** Message to be sent over a session, indicating some RPC event. */
export class SessionMessage implements ISessionMessage {

    /**
     * Constructs a new SessionMessage.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISessionMessage);

    /** Event name (e.g. "text"). */
    public event: string;

    /** Associated data (e.g. a user-facing chat message). */
    public data: ISessionMessageData;

    /**
     * Creates a new SessionMessage instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SessionMessage instance
     */
    public static create(properties?: ISessionMessage): SessionMessage;

    /**
     * Encodes the specified SessionMessage message. Does not implicitly {@link SessionMessage.verify|verify} messages.
     * @param message SessionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISessionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SessionMessage message, length delimited. Does not implicitly {@link SessionMessage.verify|verify} messages.
     * @param message SessionMessage message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISessionMessage, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SessionMessage message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SessionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SessionMessage;

    /**
     * Decodes a SessionMessage message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SessionMessage
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SessionMessage;

    /**
     * Verifies a SessionMessage message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a SessionMessage message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SessionMessage
     */
    public static fromObject(object: { [k: string]: any }): SessionMessage;

    /**
     * Creates a plain object from a SessionMessage message. Also converts values to other types if specified.
     * @param message SessionMessage
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SessionMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SessionMessage to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SessionMessageData. */
export interface ISessionMessageData {

    /**
     * @see ChatMessage.authorID
     */
    authorID?: (string|undefined);

    /** Unique ID. */
    id: string;

    /** Timestamp of this message. */
    timestamp: number;

    /** Arbitrary bytes. */
    bytes?: (Uint8Array|undefined);

    /**
     * @see SessionCapabilities
     */
    capabilities?: (ISessionCapabilities|undefined);

    /**
     * @see SessionChatState
     */
    chatState?: (ISessionChatState|undefined);

    /**
     * @see SessionCommand
     */
    command?: (ISessionCommand|undefined);

    /** If applicable, ID of an isolated exchange of messages within a session. */
    sessionSubID?: (string|undefined);

    /**
     * @see SessionText
     */
    text?: (ISessionText|undefined);

    /**
     * @see SessionTextConfirmation
     */
    textConfirmation?: (ISessionTextConfirmation|undefined);

    /**
     * @see SessionTransfer
     */
    transfer?: (ISessionTransfer|undefined);
}

/** Message data. */
export class SessionMessageData implements ISessionMessageData {

    /**
     * Constructs a new SessionMessageData.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISessionMessageData);

    /**
     * @see ChatMessage.authorID
     */
    public authorID: string;

    /** Unique ID. */
    public id: string;

    /** Timestamp of this message. */
    public timestamp: number;

    /** Arbitrary bytes. */
    public bytes: Uint8Array;

    /**
     * @see SessionCapabilities
     */
    public capabilities?: ISessionCapabilities;

    /**
     * @see SessionChatState
     */
    public chatState?: ISessionChatState;

    /**
     * @see SessionCommand
     */
    public command?: ISessionCommand;

    /** If applicable, ID of an isolated exchange of messages within a session. */
    public sessionSubID: string;

    /**
     * @see SessionText
     */
    public text?: ISessionText;

    /**
     * @see SessionTextConfirmation
     */
    public textConfirmation?: ISessionTextConfirmation;

    /**
     * @see SessionTransfer
     */
    public transfer?: ISessionTransfer;

    /**
     * Creates a new SessionMessageData instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SessionMessageData instance
     */
    public static create(properties?: ISessionMessageData): SessionMessageData;

    /**
     * Encodes the specified SessionMessageData message. Does not implicitly {@link SessionMessageData.verify|verify} messages.
     * @param message SessionMessageData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISessionMessageData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SessionMessageData message, length delimited. Does not implicitly {@link SessionMessageData.verify|verify} messages.
     * @param message SessionMessageData message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISessionMessageData, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SessionMessageData message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SessionMessageData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SessionMessageData;

    /**
     * Decodes a SessionMessageData message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SessionMessageData
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SessionMessageData;

    /**
     * Verifies a SessionMessageData message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a SessionMessageData message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SessionMessageData
     */
    public static fromObject(object: { [k: string]: any }): SessionMessageData;

    /**
     * Creates a plain object from a SessionMessageData message. Also converts values to other types if specified.
     * @param message SessionMessageData
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SessionMessageData, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SessionMessageData to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SessionMessageList. */
export interface ISessionMessageList {

    /** Messages. */
    messages?: (ISessionMessage[]|undefined);
}

/** Array of session messages. */
export class SessionMessageList implements ISessionMessageList {

    /**
     * Constructs a new SessionMessageList.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISessionMessageList);

    /** Messages. */
    public messages: ISessionMessage[];

    /**
     * Creates a new SessionMessageList instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SessionMessageList instance
     */
    public static create(properties?: ISessionMessageList): SessionMessageList;

    /**
     * Encodes the specified SessionMessageList message. Does not implicitly {@link SessionMessageList.verify|verify} messages.
     * @param message SessionMessageList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISessionMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SessionMessageList message, length delimited. Does not implicitly {@link SessionMessageList.verify|verify} messages.
     * @param message SessionMessageList message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISessionMessageList, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SessionMessageList message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SessionMessageList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SessionMessageList;

    /**
     * Decodes a SessionMessageList message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SessionMessageList
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SessionMessageList;

    /**
     * Verifies a SessionMessageList message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a SessionMessageList message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SessionMessageList
     */
    public static fromObject(object: { [k: string]: any }): SessionMessageList;

    /**
     * Creates a plain object from a SessionMessageList message. Also converts values to other types if specified.
     * @param message SessionMessageList
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SessionMessageList, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SessionMessageList to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SessionText. */
export interface ISessionText {

    /**
     * @see ChatMessage.dimensions
     */
    dimensions?: (IChatMessageLine[]|undefined);

    /** Indicates whether entire chat should be self-destructed (only valid for first message). */
    selfDestructChat?: (boolean|undefined);

    /** Self-destruction timeout. */
    selfDestructTimeout?: (number|undefined);

    /**
     * @see ChatMessageValue
     */
    value: IChatMessageValue;
}

/** Contains an actual chat text message. */
export class SessionText implements ISessionText {

    /**
     * Constructs a new SessionText.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISessionText);

    /**
     * @see ChatMessage.dimensions
     */
    public dimensions: IChatMessageLine[];

    /** Indicates whether entire chat should be self-destructed (only valid for first message). */
    public selfDestructChat: boolean;

    /** Self-destruction timeout. */
    public selfDestructTimeout: number;

    /**
     * @see ChatMessageValue
     */
    public value: IChatMessageValue;

    /**
     * Creates a new SessionText instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SessionText instance
     */
    public static create(properties?: ISessionText): SessionText;

    /**
     * Encodes the specified SessionText message. Does not implicitly {@link SessionText.verify|verify} messages.
     * @param message SessionText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISessionText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SessionText message, length delimited. Does not implicitly {@link SessionText.verify|verify} messages.
     * @param message SessionText message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISessionText, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SessionText message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SessionText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SessionText;

    /**
     * Decodes a SessionText message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SessionText
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SessionText;

    /**
     * Verifies a SessionText message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a SessionText message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SessionText
     */
    public static fromObject(object: { [k: string]: any }): SessionText;

    /**
     * Creates a plain object from a SessionText message. Also converts values to other types if specified.
     * @param message SessionText
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SessionText, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SessionText to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SessionTextConfirmation. */
export interface ISessionTextConfirmation {

    /** SessionText ID to be confirmed. */
    id: string;
}

/** Receipt confirmation for a SessionText. */
export class SessionTextConfirmation implements ISessionTextConfirmation {

    /**
     * Constructs a new SessionTextConfirmation.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISessionTextConfirmation);

    /** SessionText ID to be confirmed. */
    public id: string;

    /**
     * Creates a new SessionTextConfirmation instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SessionTextConfirmation instance
     */
    public static create(properties?: ISessionTextConfirmation): SessionTextConfirmation;

    /**
     * Encodes the specified SessionTextConfirmation message. Does not implicitly {@link SessionTextConfirmation.verify|verify} messages.
     * @param message SessionTextConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISessionTextConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SessionTextConfirmation message, length delimited. Does not implicitly {@link SessionTextConfirmation.verify|verify} messages.
     * @param message SessionTextConfirmation message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISessionTextConfirmation, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SessionTextConfirmation message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SessionTextConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SessionTextConfirmation;

    /**
     * Decodes a SessionTextConfirmation message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SessionTextConfirmation
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SessionTextConfirmation;

    /**
     * Verifies a SessionTextConfirmation message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a SessionTextConfirmation message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SessionTextConfirmation
     */
    public static fromObject(object: { [k: string]: any }): SessionTextConfirmation;

    /**
     * Creates a plain object from a SessionTextConfirmation message. Also converts values to other types if specified.
     * @param message SessionTextConfirmation
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SessionTextConfirmation, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SessionTextConfirmation to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

/** Properties of a SessionTransfer. */
export interface ISessionTransfer {

    /** Indicates a non-response to, acceptance of, or rejection of a file transfer. */
    answer: SessionTransfer.Answers;

    /** Unique ID to represent this file transfer. */
    id: string;

    /** Indicates whether file should be handled as an image. */
    image: boolean;

    /** If image is true, this will be used as a self-destruct timeout for the message. */
    imageSelfDestructTimeout: number;

    /** Indicates whether file is being sent from this Cyph instance. */
    isOutgoing: boolean;

    /** Symmetric key used for encrypting file over the wire. */
    key: Uint8Array;

    /** MIME type. */
    mediaType: string;

    /** File name. */
    name: string;

    /** Indicates the time at which the file was received. */
    receiptTimestamp?: (number|undefined);

    /** File size in bytes. */
    size: number;

    /** File URL. */
    url: string;
}

/** Represents an active file transfer. */
export class SessionTransfer implements ISessionTransfer {

    /**
     * Constructs a new SessionTransfer.
     * @param [properties] Properties to set
     */
    constructor(properties?: ISessionTransfer);

    /** Indicates a non-response to, acceptance of, or rejection of a file transfer. */
    public answer: SessionTransfer.Answers;

    /** Unique ID to represent this file transfer. */
    public id: string;

    /** Indicates whether file should be handled as an image. */
    public image: boolean;

    /** If image is true, this will be used as a self-destruct timeout for the message. */
    public imageSelfDestructTimeout: number;

    /** Indicates whether file is being sent from this Cyph instance. */
    public isOutgoing: boolean;

    /** Symmetric key used for encrypting file over the wire. */
    public key: Uint8Array;

    /** MIME type. */
    public mediaType: string;

    /** File name. */
    public name: string;

    /** Indicates the time at which the file was received. */
    public receiptTimestamp: number;

    /** File size in bytes. */
    public size: number;

    /** File URL. */
    public url: string;

    /**
     * Creates a new SessionTransfer instance using the specified properties.
     * @param [properties] Properties to set
     * @returns SessionTransfer instance
     */
    public static create(properties?: ISessionTransfer): SessionTransfer;

    /**
     * Encodes the specified SessionTransfer message. Does not implicitly {@link SessionTransfer.verify|verify} messages.
     * @param message SessionTransfer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: ISessionTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified SessionTransfer message, length delimited. Does not implicitly {@link SessionTransfer.verify|verify} messages.
     * @param message SessionTransfer message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: ISessionTransfer, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes a SessionTransfer message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns SessionTransfer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): SessionTransfer;

    /**
     * Decodes a SessionTransfer message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns SessionTransfer
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): SessionTransfer;

    /**
     * Verifies a SessionTransfer message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates a SessionTransfer message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns SessionTransfer
     */
    public static fromObject(object: { [k: string]: any }): SessionTransfer;

    /**
     * Creates a plain object from a SessionTransfer message. Also converts values to other types if specified.
     * @param message SessionTransfer
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: SessionTransfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this SessionTransfer to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace SessionTransfer {

    /** Possible responses to a transfer request. */
    enum Answers {
        Empty = 0,
        Accepted = 1,
        Rejected = 2
    }
}

/** Properties of an Internal. */
export interface IInternal {
}

/** Represents an Internal. */
export class Internal implements IInternal {

    /**
     * Constructs a new Internal.
     * @param [properties] Properties to set
     */
    constructor(properties?: IInternal);

    /**
     * Creates a new Internal instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Internal instance
     */
    public static create(properties?: IInternal): Internal;

    /**
     * Encodes the specified Internal message. Does not implicitly {@link Internal.verify|verify} messages.
     * @param message Internal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(message: IInternal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Encodes the specified Internal message, length delimited. Does not implicitly {@link Internal.verify|verify} messages.
     * @param message Internal message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(message: IInternal, writer?: $protobuf.Writer): $protobuf.Writer;

    /**
     * Decodes an Internal message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Internal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal;

    /**
     * Decodes an Internal message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Internal
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal;

    /**
     * Verifies an Internal message.
     * @param message Plain object to verify
     * @returns `undefined` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): (string|undefined);

    /**
     * Creates an Internal message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Internal
     */
    public static fromObject(object: { [k: string]: any }): Internal;

    /**
     * Creates a plain object from an Internal message. Also converts values to other types if specified.
     * @param message Internal
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(message: Internal, options?: $protobuf.IConversionOptions): { [k: string]: any };

    /**
     * Converts this Internal to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
}

export namespace Internal {

    /** Properties of a BooleanArray. */
    interface IBooleanArray {

        /** BooleanArray data */
        data?: (boolean[]|undefined);
    }

    /** Represents a BooleanArray. */
    class BooleanArray implements IBooleanArray {

        /**
         * Constructs a new BooleanArray.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.IBooleanArray);

        /** BooleanArray data. */
        public data: boolean[];

        /**
         * Creates a new BooleanArray instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BooleanArray instance
         */
        public static create(properties?: Internal.IBooleanArray): Internal.BooleanArray;

        /**
         * Encodes the specified BooleanArray message. Does not implicitly {@link Internal.BooleanArray.verify|verify} messages.
         * @param message BooleanArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.IBooleanArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BooleanArray message, length delimited. Does not implicitly {@link Internal.BooleanArray.verify|verify} messages.
         * @param message BooleanArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.IBooleanArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BooleanArray message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BooleanArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.BooleanArray;

        /**
         * Decodes a BooleanArray message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BooleanArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.BooleanArray;

        /**
         * Verifies a BooleanArray message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a BooleanArray message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BooleanArray
         */
        public static fromObject(object: { [k: string]: any }): Internal.BooleanArray;

        /**
         * Creates a plain object from a BooleanArray message. Also converts values to other types if specified.
         * @param message BooleanArray
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.BooleanArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BooleanArray to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BooleanMap. */
    interface IBooleanMap {

        /** BooleanMap data */
        data?: ({ [k: string]: boolean }|undefined);
    }

    /** Represents a BooleanMap. */
    class BooleanMap implements IBooleanMap {

        /**
         * Constructs a new BooleanMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.IBooleanMap);

        /** BooleanMap data. */
        public data: { [k: string]: boolean };

        /**
         * Creates a new BooleanMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BooleanMap instance
         */
        public static create(properties?: Internal.IBooleanMap): Internal.BooleanMap;

        /**
         * Encodes the specified BooleanMap message. Does not implicitly {@link Internal.BooleanMap.verify|verify} messages.
         * @param message BooleanMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.IBooleanMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BooleanMap message, length delimited. Does not implicitly {@link Internal.BooleanMap.verify|verify} messages.
         * @param message BooleanMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.IBooleanMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BooleanMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BooleanMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.BooleanMap;

        /**
         * Decodes a BooleanMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BooleanMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.BooleanMap;

        /**
         * Verifies a BooleanMap message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a BooleanMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BooleanMap
         */
        public static fromObject(object: { [k: string]: any }): Internal.BooleanMap;

        /**
         * Creates a plain object from a BooleanMap message. Also converts values to other types if specified.
         * @param message BooleanMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.BooleanMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BooleanMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BooleanValue. */
    interface IBooleanValue {

        /** BooleanValue data */
        data: boolean;
    }

    /** Represents a BooleanValue. */
    class BooleanValue implements IBooleanValue {

        /**
         * Constructs a new BooleanValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.IBooleanValue);

        /** BooleanValue data. */
        public data: boolean;

        /**
         * Creates a new BooleanValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BooleanValue instance
         */
        public static create(properties?: Internal.IBooleanValue): Internal.BooleanValue;

        /**
         * Encodes the specified BooleanValue message. Does not implicitly {@link Internal.BooleanValue.verify|verify} messages.
         * @param message BooleanValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.IBooleanValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BooleanValue message, length delimited. Does not implicitly {@link Internal.BooleanValue.verify|verify} messages.
         * @param message BooleanValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.IBooleanValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BooleanValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BooleanValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.BooleanValue;

        /**
         * Decodes a BooleanValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BooleanValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.BooleanValue;

        /**
         * Verifies a BooleanValue message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a BooleanValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BooleanValue
         */
        public static fromObject(object: { [k: string]: any }): Internal.BooleanValue;

        /**
         * Creates a plain object from a BooleanValue message. Also converts values to other types if specified.
         * @param message BooleanValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.BooleanValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BooleanValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NumberArray. */
    interface INumberArray {

        /** NumberArray data */
        data?: (number[]|undefined);
    }

    /** Represents a NumberArray. */
    class NumberArray implements INumberArray {

        /**
         * Constructs a new NumberArray.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.INumberArray);

        /** NumberArray data. */
        public data: number[];

        /**
         * Creates a new NumberArray instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NumberArray instance
         */
        public static create(properties?: Internal.INumberArray): Internal.NumberArray;

        /**
         * Encodes the specified NumberArray message. Does not implicitly {@link Internal.NumberArray.verify|verify} messages.
         * @param message NumberArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.INumberArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NumberArray message, length delimited. Does not implicitly {@link Internal.NumberArray.verify|verify} messages.
         * @param message NumberArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.INumberArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NumberArray message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.NumberArray;

        /**
         * Decodes a NumberArray message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NumberArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.NumberArray;

        /**
         * Verifies a NumberArray message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a NumberArray message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NumberArray
         */
        public static fromObject(object: { [k: string]: any }): Internal.NumberArray;

        /**
         * Creates a plain object from a NumberArray message. Also converts values to other types if specified.
         * @param message NumberArray
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.NumberArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NumberArray to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NumberValue. */
    interface INumberValue {

        /** NumberValue data */
        data: number;
    }

    /** Represents a NumberValue. */
    class NumberValue implements INumberValue {

        /**
         * Constructs a new NumberValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.INumberValue);

        /** NumberValue data. */
        public data: number;

        /**
         * Creates a new NumberValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NumberValue instance
         */
        public static create(properties?: Internal.INumberValue): Internal.NumberValue;

        /**
         * Encodes the specified NumberValue message. Does not implicitly {@link Internal.NumberValue.verify|verify} messages.
         * @param message NumberValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.INumberValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NumberValue message, length delimited. Does not implicitly {@link Internal.NumberValue.verify|verify} messages.
         * @param message NumberValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.INumberValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NumberValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NumberValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.NumberValue;

        /**
         * Decodes a NumberValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NumberValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.NumberValue;

        /**
         * Verifies a NumberValue message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a NumberValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NumberValue
         */
        public static fromObject(object: { [k: string]: any }): Internal.NumberValue;

        /**
         * Creates a plain object from a NumberValue message. Also converts values to other types if specified.
         * @param message NumberValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.NumberValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NumberValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StringArray. */
    interface IStringArray {

        /** StringArray data */
        data?: (string[]|undefined);
    }

    /** Represents a StringArray. */
    class StringArray implements IStringArray {

        /**
         * Constructs a new StringArray.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.IStringArray);

        /** StringArray data. */
        public data: string[];

        /**
         * Creates a new StringArray instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringArray instance
         */
        public static create(properties?: Internal.IStringArray): Internal.StringArray;

        /**
         * Encodes the specified StringArray message. Does not implicitly {@link Internal.StringArray.verify|verify} messages.
         * @param message StringArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.IStringArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringArray message, length delimited. Does not implicitly {@link Internal.StringArray.verify|verify} messages.
         * @param message StringArray message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.IStringArray, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringArray message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.StringArray;

        /**
         * Decodes a StringArray message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringArray
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.StringArray;

        /**
         * Verifies a StringArray message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a StringArray message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringArray
         */
        public static fromObject(object: { [k: string]: any }): Internal.StringArray;

        /**
         * Creates a plain object from a StringArray message. Also converts values to other types if specified.
         * @param message StringArray
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.StringArray, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringArray to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StringMap. */
    interface IStringMap {

        /** StringMap data */
        data?: ({ [k: string]: string }|undefined);
    }

    /** Represents a StringMap. */
    class StringMap implements IStringMap {

        /**
         * Constructs a new StringMap.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.IStringMap);

        /** StringMap data. */
        public data: { [k: string]: string };

        /**
         * Creates a new StringMap instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringMap instance
         */
        public static create(properties?: Internal.IStringMap): Internal.StringMap;

        /**
         * Encodes the specified StringMap message. Does not implicitly {@link Internal.StringMap.verify|verify} messages.
         * @param message StringMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.IStringMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringMap message, length delimited. Does not implicitly {@link Internal.StringMap.verify|verify} messages.
         * @param message StringMap message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.IStringMap, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringMap message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.StringMap;

        /**
         * Decodes a StringMap message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringMap
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.StringMap;

        /**
         * Verifies a StringMap message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a StringMap message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringMap
         */
        public static fromObject(object: { [k: string]: any }): Internal.StringMap;

        /**
         * Creates a plain object from a StringMap message. Also converts values to other types if specified.
         * @param message StringMap
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.StringMap, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringMap to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StringValue. */
    interface IStringValue {

        /** StringValue data */
        data: string;
    }

    /** Represents a StringValue. */
    class StringValue implements IStringValue {

        /**
         * Constructs a new StringValue.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.IStringValue);

        /** StringValue data. */
        public data: string;

        /**
         * Creates a new StringValue instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringValue instance
         */
        public static create(properties?: Internal.IStringValue): Internal.StringValue;

        /**
         * Encodes the specified StringValue message. Does not implicitly {@link Internal.StringValue.verify|verify} messages.
         * @param message StringValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringValue message, length delimited. Does not implicitly {@link Internal.StringValue.verify|verify} messages.
         * @param message StringValue message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringValue message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.StringValue;

        /**
         * Decodes a StringValue message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringValue
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.StringValue;

        /**
         * Verifies a StringValue message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringValue
         */
        public static fromObject(object: { [k: string]: any }): Internal.StringValue;

        /**
         * Creates a plain object from a StringValue message. Also converts values to other types if specified.
         * @param message StringValue
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringValue to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Uint32Array. */
    interface IUint32Array {

        /** Uint32Array data */
        data?: (number[]|undefined);
    }

    /** Represents an Uint32Array. */
    class Uint32Array implements IUint32Array {

        /**
         * Constructs a new Uint32Array.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.IUint32Array);

        /** Uint32Array data. */
        public data: number[];

        /**
         * Creates a new Uint32Array instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Uint32Array instance
         */
        public static create(properties?: Internal.IUint32Array): Internal.Uint32Array;

        /**
         * Encodes the specified Uint32Array message. Does not implicitly {@link Internal.Uint32Array.verify|verify} messages.
         * @param message Uint32Array message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.IUint32Array, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Uint32Array message, length delimited. Does not implicitly {@link Internal.Uint32Array.verify|verify} messages.
         * @param message Uint32Array message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.IUint32Array, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Uint32Array message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Uint32Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.Uint32Array;

        /**
         * Decodes an Uint32Array message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Uint32Array
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.Uint32Array;

        /**
         * Verifies an Uint32Array message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an Uint32Array message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Uint32Array
         */
        public static fromObject(object: { [k: string]: any }): Internal.Uint32Array;

        /**
         * Creates a plain object from an Uint32Array message. Also converts values to other types if specified.
         * @param message Uint32Array
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.Uint32Array, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Uint32Array to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Uint32Value. */
    interface IUint32Value {

        /** Uint32Value data */
        data: number;
    }

    /** Represents an Uint32Value. */
    class Uint32Value implements IUint32Value {

        /**
         * Constructs a new Uint32Value.
         * @param [properties] Properties to set
         */
        constructor(properties?: Internal.IUint32Value);

        /** Uint32Value data. */
        public data: number;

        /**
         * Creates a new Uint32Value instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Uint32Value instance
         */
        public static create(properties?: Internal.IUint32Value): Internal.Uint32Value;

        /**
         * Encodes the specified Uint32Value message. Does not implicitly {@link Internal.Uint32Value.verify|verify} messages.
         * @param message Uint32Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: Internal.IUint32Value, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Uint32Value message, length delimited. Does not implicitly {@link Internal.Uint32Value.verify|verify} messages.
         * @param message Uint32Value message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: Internal.IUint32Value, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Uint32Value message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Uint32Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): Internal.Uint32Value;

        /**
         * Decodes an Uint32Value message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Uint32Value
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): Internal.Uint32Value;

        /**
         * Verifies an Uint32Value message.
         * @param message Plain object to verify
         * @returns `undefined` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|undefined);

        /**
         * Creates an Uint32Value message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Uint32Value
         */
        public static fromObject(object: { [k: string]: any }): Internal.Uint32Value;

        /**
         * Creates a plain object from an Uint32Value message. Also converts values to other types if specified.
         * @param message Uint32Value
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: Internal.Uint32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Uint32Value to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
