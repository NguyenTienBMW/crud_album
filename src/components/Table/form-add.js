import React, { useState, forwardRef, useImperativeHandle, useRef, useEffect } from 'react'

export const FormAdd = forwardRef(({
    handleAddSong
}, ref) => {
    const emailRef = useRef();

    const [nameAlbumField, setNameAlbumField] = useState('')
    const [indexAlbum, setIndexAlbum] = useState()
    const [disableField, setDisableField] = useState(true);

    const [nameSong, setNameSong] = useState('');
    const [author, setAuthor] = useState('');
    const [createdDate, setCreatedDate] = useState('');

    const [nameSongError, setNameSongError] = useState(false);
    const [authorError, setAuthorError] = useState(false);
    const [createdDateError, setCreatedDateError] = useState(false);

    useImperativeHandle(ref, () => ({
        addSong: (nameAlbum, indexAlbum) => {
            setNameAlbumField(nameAlbum)
            setDisableField(false)
            setIndexAlbum(indexAlbum)
            emailRef.current.focus()
        }
    }));

    useEffect(() => {
        if(!disableField) {
            emailRef.current.focus()
        }
    }, [disableField])

    const handleCliclAddSong = (e) => {
        e.preventDefault()

        if(hadnleValidate()) return 

        if(handleAddSong) {
            handleAddSong(nameSong.trim(), author.trim(), createdDate.trim(), indexAlbum)

            setNameSong('')
            setAuthor('')
            setCreatedDate('')
            setNameAlbumField('')
        }
    }

    const reset = () => {
        
    }

    const hadnleValidate = () => {
        let checkValidate = false;

        if(!nameSong.trim()) {
            setNameSongError(true)
            checkValidate = true
        }else {
            setNameSongError(false)
        }

        if(!author.trim()) {
            setAuthorError(true)
            checkValidate = true
        }else {
            setAuthorError(false)
        }

        if(!createdDate.trim()) {
            setCreatedDateError(true)
            checkValidate = true
        }else {
            setCreatedDateError(false)
        }

        return checkValidate
    }

    const handleClickCancel = (e) => {
        e.preventDefault()

        setNameSong('')
        setAuthor('')
        setCreatedDate('')
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-form-label">
                    T??n Album
                </label>
                <div>
                    <input
                        disabled={true}
                        value={nameAlbumField}
                        className="form-control"
                        placeholder="T??n album"
                    />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-form-label">
                    T??n b??i h??t
                </label>
                <div className="">
                    <input
                        value={nameSong}
                        ref={emailRef}
                        disabled={disableField}
                        className="form-control"
                        placeholder="T??n b??i h??t"
                        onChange={(e) => setNameSong(e.target.value)}
                    />
                    {nameSongError && <span className='error'>Vui l??ng nh???p t??n b??i h??t</span>}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-form-label">
                    Nh???c s???
                </label>
                <div className="">
                    <input
                        value={author}
                        disabled={disableField}
                        className="form-control"
                        placeholder="Nh???c s???"
                        onChange={(e) => setAuthor(e.target.value)}
                    />
                    {authorError && <span className='error'>Vui l??ng nh???p nh???c s???</span>}
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-form-label">
                    Ng??y s??ng t??c
                </label>
                <div className="">
                    <input
                        value={createdDate}
                        disabled={disableField}
                        type="date"
                        className="form-control"
                        onChange={(e) => setCreatedDate(e.target.value)}
                    />
                    {createdDateError && <span className='error'>Vui l??ng ch???n ng??y s??ng t??c</span>}
                </div>
            </div>
            <div className="form-group">
                <div>
                    <button type="submit" className="btn btn-primary" disabled={disableField} onClick={handleCliclAddSong}>
                        Th??m b??i h??t
                    </button>
                    <button type="submit" className="ml-3  btn btn-primary" disabled={disableField} onClick={handleClickCancel}>
                        Hu???
                    </button>
                </div>
            </div>
        </form>
    )
})