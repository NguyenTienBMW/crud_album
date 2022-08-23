import React from "react";
import "./index.css";
export default function Header() {
	return (
		<>
			<div class="header-page">
				<div class="container">
					<div class="row">
						<div class="col-8">
							<h2>QUẢN LÝ ALBUM</h2>
							<div class="row">
								<div class="col-md-12 form-search">
									<form className="d-md-inline-flex">
										<div class="form-group mx-sm-3 mb-2">
											<input
												type="password"
												class="form-control"
												placeholder="Type here..."
											/>
										</div>
										<button type="submit" class="btn btn-primary mb-2">
											Tim kiem
										</button>
									</form>
								</div>
							</div>
							<div class="row bg-primary text-white header-title">
								<div class="col-md-8"> DANH SACH ALBUM</div>
								<div class="col-md-4">
									<button type="button" class="btn btn-success">
										Them album
									</button>
								</div>
							</div>
							<div class="row mt-10 bg-secondary  text-white header-title">
								<div class="col-md-8 section-album">
									<div class="list-album">
										<div class="album-title">
											<h3 class="album-name">Ten album</h3>
											<button type="button" class="btn btn-success">
												Sua ten
											</button>
										</div>
										<table class="table table-bordered">
											<thead>
												<tr>
													<th scope="col">Tên bài hát</th>
													<th scope="col">Nhạc sĩ</th>
													<th scope="col">Ngày sáng tác</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>Mark</td>
													<td>Otto</td>
													<td>@mdo</td>
												</tr>
											</tbody>
										</table>
										<div class="has-content">Không có bài hát nào</div>
									</div>
								</div>
								<div class="col-md-4">
									<button type="button" class="btn btn-primary">
										Them bai
									</button>
									<button type="button" class="btn btn-danger">
										Xoa album
									</button>
								</div>
							</div>
						</div>
						<div class="col-4">
							<p>Thông tin bài hát</p>
							<form>
								<div class="form-group">
									<label for="inputEmail3" class="col-form-label">
										Tên Album
									</label>
									<div>
										<input
											type="email"
											class="form-control"
											placeholder="Email"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="inputEmail3" class="col-form-label">
										Tên bài hát
									</label>
									<div class="">
										<input
											type="email"
											class="form-control"
											placeholder="Email"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="inputEmail3" class="col-form-label">
										Nhạc sỹ
									</label>
									<div class="">
										<input
											type="email"
											class="form-control"
											placeholder="Email"
										/>
									</div>
								</div>
								<div class="form-group">
									<label for="inputEmail3" class="col-form-label">
										Ngày sáng tác
									</label>
									<div class="">
										<input
											type="date"
											class="form-control"
											placeholder="Email"
										/>
									</div>
								</div>
								<div class="form-group">
									<div>
										<button type="submit" class="btn btn-primary">
											Thêm bài hát
										</button>
										<button type="submit" class="m-3  btn btn-primary">
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
