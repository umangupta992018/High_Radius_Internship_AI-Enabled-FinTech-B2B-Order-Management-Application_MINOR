package com.highradius;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class connection {
		

	public static Connection getConnection() throws ClassNotFoundException {
		// TODO Auto-generated method stub
		Connection con=null;
		try {
			Class.forName("com.mysql.jdbc.Driver");
			con=DriverManager.getConnection("jdbc:mysql://localhost:3306/my", "root", "1234");
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return con;
	}
}