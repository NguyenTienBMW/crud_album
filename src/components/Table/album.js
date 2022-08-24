import React, { useEffect, useState } from 'react'

export function RowAlbum({
    title,
    index,
    handleOk
}) {
    const [nameAlbum, setNameAlbum] = useState('');
    const [editNameAlbum, setEditNameAlbum] = useState(false);

    useEffect(() => {
        if(title !== 'empty') {
            setNameAlbum(title)
        }else {
            setNameAlbum('')
        }
    }, [title])

    const handleClickBtn = () => {
        if(nameAlbum){
            handleOk(nameAlbum, index)
            setEditNameAlbum(false)
        }else {
            alert('Hãy nhập tên album')
        }
    }

    return (
        <div className="header-album">
            {title === 'empty' || editNameAlbum 
                ? <>
                    <input onChange={(e) => setNameAlbum(e.target.value)} value={nameAlbum}/>
                    <button style={{cursor: 'pointer'}} className='btn-ok' onClick={handleClickBtn}>Đông ý</button>
                </>
                : <>
                    <span>{title}</span>
                    <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => setEditNameAlbum(true)}
                    >
                        Sửa tên
                    </button>
                </>}
        </div>
    )
}
