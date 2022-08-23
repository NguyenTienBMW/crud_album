import React, { useState } from "react";
import "./index.css";
export default function Header() {
	const [musics, setMusics] = useState([
		{
			album: 1,
			song: [
				{
					id: 1,
					name: "Song1",
					author: "Tien",
					date: "22/08/2022",
				},
				{
					id: 2,
					name: "Song2",
					author: "Tien",
					date: "22/08/2022",
				},
				{
					id: 3,
					name: "Song3",
					author: "Tien",
					date: "22/08/2022",
				},
			],
		},
		{
			album: 2,
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
	const deleteItem = (album_id, id) => {
		const newTodos = musics.map(item => {
			if (item.album === album_id) {
				setMusics(...musics, ...item.song.splice(id, 1));
			}
		});
		return newTodos;
	};
	console.log(musics);

	// const removeMyCheese = cheeseId => {
	// 	console.log(cheeseId);

	// 	setMyCheeses(prev => {
	// 		const items = prev.items.filter(item => item.itemid !== cheeseId);
	// 		return {
	// 			...prev,
	// 			items,
	// 		};
	// 	});
	// };

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
									<button type="button" className="btn btn-success">
										Thêm album
									</button>
								</div>
							</div>
							<div className="row mt-5">
								<div className="col-12">
									{musics &&
										musics.map(music => (
											<table className="table table-bordered" key={music.album}>
												<thead>
													<tr>
														<th rowSpan="1" colSpan="3">
															<div className="header-album">
																<span>Tên album {music.album}</span>
																<button
																	type="button"
																	className="btn btn-primary"
																>
																	Sửa tên
																</button>
															</div>
														</th>
														<th rowSpan="2" colSpan="1">
															<button type="button" className="btn btn-primary">
																Thêm bài
															</button>
															<button
																type="button"
																className="btn btn-danger ml-2"
															>
																Xoá album
															</button>
														</th>
													</tr>
													<tr>
														<th rowSpan="1" colSpan="1">
															Tên bài hát
														</th>
														<th rowSpan="1" colSpan="1">
															Nhạc sỹ
														</th>
														<th rowSpan="1" colSpan="1">
															Ngày sáng tác
														</th>
													</tr>
												</thead>
												<tbody>
													{music.song.map(item => (
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
																	onClick={() =>
																		deleteItem(music.album, item.id)
																	}
																>
																	Xoá
																</button>
															</td>
														</tr>
													))}
												</tbody>
											</table>
										))}
								</div>
							</div>
						</div>
						<div className="col-4">
							<p>Thông tin bài hát</p>
							<form>
								<div className="form-group">
									<label htmlFor="inputEmail3" className="col-form-label">
										Tên Album
									</label>
									<div>
										<input
											type="email"
											className="form-control"
											placeholder="Tên album"
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputEmail3" className="col-form-label">
										Tên bài hát
									</label>
									<div className="">
										<input
											type="email"
											className="form-control"
											placeholder="Tên bài hát"
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputEmail3" className="col-form-label">
										Nhạc sỹ
									</label>
									<div className="">
										<input
											type="email"
											className="form-control"
											placeholder="Nhạc sỹ"
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputEmail3" className="col-form-label">
										Ngày sáng tác
									</label>
									<div className="">
										<input
											type="date"
											className="form-control"
											placeholder="Nhà sáng tác"
										/>
									</div>
								</div>
								<div className="form-group">
									<div>
										<button type="submit" className="btn btn-primary">
											Thêm bài hát
										</button>
										<button type="submit" className="ml-3  btn btn-primary">
											Huỷ
										</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
