import React, { useRef, useState } from "react";
import { RowAlbum } from "./album";
import { FormAdd } from "./form-add";
import { HeaderSong } from "./header-song";
import "./style.css";
export default function Header() {
	const formAddSongRef = useRef('');
	const [musics, setMusics] = useState([
		{
			id: 1,
			album: 'album 1',
			song: [],
		},
		{
			id: 2,
			album: 'album 2',
			song: [
				{
					id: 1,
					name: "Song2-1",
					author: "Tien",
					date: "22/08/2022",
				},
				{
					id: 2,
					name: "Song2-2",
					author: "Tien",
					date: "22/08/2022",
				},
				{
					id: 3,
					name: "Song2-3",
					author: "Tien",
					date: "22/08/2022",
				},
			],
		},
	]);

	const handleAddAlbum = () => {
		setMusics(prev => ([
			{
				id: musics[musics.length - 1]?.id + 1 ?? 1,
				album: 'empty',
				song: [],
			},
			...prev
		]));
	}

	const handleOk = (nameAlbum, index) => {
		setMusics((prev) => {
			prev[index].album = nameAlbum

			return [
				...prev
			]
		})
	}

	const handleDeleteAlbum = (index) => {
		setMusics((prev) => {
			prev.splice(index, 1)

			return [
				...prev
			]
		})
	}

	const handleClickAddSong = (index) => {
		formAddSongRef.current.addSong(musics[index].album, index)
	}

	const handleAddSong = (nameSong, author, createdDate, index) => {
		setMusics(prev => {
			prev[index].song.push({
				id: prev[index].song?.length === 0 ? 1 : prev[index].song[prev[index].song.length - 1].id + 1,
				name: nameSong,
				author: author,
				date: createdDate,
			})

			return [...prev]
		})
	}

	return (
		<>
			<div className="header-page">
				<div className="container">
					<div className="row">
						<div className="col-8">
							<h2>QUẢN LÝ ALBUM</h2>
							<div className="row">
								<div className="col-md-12 form-search">
									<form className="d-md-inline-flex">
										<div className="form-group mx-sm-3 mb-2">
											<input
												type="password"
												className="form-control"
												placeholder="Type here..."
											/>
										</div>
										<button type="submit" className="btn btn-primary mb-2">
											Tim kiem
										</button>
									</form>
								</div>
							</div>
							<div className="row table-title d-flex bg-primary">
								<div className="col-8">DANH SÁCH ALBUM</div>
								<div className="col-4">
									<button type="button" className="btn btn-success" onClick={handleAddAlbum}>
										Thêm album
									</button>
								</div>
							</div>
							<div className="row mt-5">
								<div className="col-12">
									{musics &&
										musics.map((music, index) => (
											<table className="table table-bordered" key={index}>
												<thead>
													<tr>
														<th rowSpan="1" colSpan="3">
															<RowAlbum title={music.album} handleOk={handleOk} index={index}/>
														</th>
														<th rowSpan="2" colSpan="1">
															<button 
																type="button" 
																className="btn btn-primary"
																onClick={() => handleClickAddSong(index)}
															>
																Thêm bài
															</button>
															<button
																type="button"
																className="btn btn-danger ml-2"
																onClick={() => handleDeleteAlbum(index)}
															>
																Xoá album
															</button>
														</th>
													</tr>
													<tr>
														<HeaderSong />
													</tr>
												</thead>
												<tbody>{
													music.song.length > 0 
														? music?.song.map(item => (
															<tr key={item.id}>
																<td>
																	<p>{item.name}</p>
																</td>
																<td>
																	<p>{item.author}</p>
																</td>
																<td>
																	<p>{item.date}</p>
																</td>
																<td>
																	<button
																		type="button"
																		className="btn btn-primary"
																	>
																		Sửa
																	</button>
																	<button
																		type="button"
																		className="btn btn-danger ml-2"
																	>
																		Xoá
																	</button>
																</td>
															</tr>
														))
														: <tr><td colSpan={4}><p>Không có bài hát</p></td></tr>
												}</tbody>
											</table>
										))}
								</div>
							</div>
						</div>
						<div className="col-4">
							<p>Thông tin bài hát</p>
							<FormAdd ref={formAddSongRef} handleAddSong={handleAddSong}/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
