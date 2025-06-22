package com.HRC_Milestone2;


import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

@WebServlet("/SearchFunc")
public class SearchFunc extends HttpServlet {
	
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		PrintWriter out = response.getWriter();
		response.setContentType("application/json");
		String id=request.getParameter("id");
		String page=request.getParameter("offset");
		
		try {
			String dbDriver = "com.mysql.cj.jdbc.Driver"; 
	        String dbURL = "jdbc:mysql://localhost:3306/"; 
	        String dbName = "h2h_internship"; 
	        String dbUsername = "root"; 
	        String dbPassword = "root"; 
	        
	  
	        Class.forName(dbDriver); 
	        Connection con = DriverManager.getConnection(dbURL + dbName,dbUsername, dbPassword); 
	        String sql =  "SELECT * FROM invoice_details WHERE invoice_id like ? LIMIT 20 OFFSET " + " "+ page;
	        PreparedStatement ps = con.prepareStatement(sql); 
	        ps.setString(1, id + "%");
	        ResultSet rs = ps.executeQuery();
	        
	        List<Pojo> result = new ArrayList<>();
	        
	        while(rs.next()) {
	        	Pojo inf = new Pojo();
	        	inf.setName_customer(rs.getString("name_customer"));
	        	inf.setCust_number(rs.getString("cust_number"));
	        	inf.setInvoice_id(rs.getDouble("invoice_id"));
	        	inf.setTotal_open_amount(rs.getDouble("total_open_amount"));
	        	inf.setDue_in_date(rs.getDate("due_in_date"));
	        	inf.setNotes(rs.getString("notes") == null ? "" : rs.getString("notes"));
	        	result.add(inf);
	        }
	        String data = new Gson().toJson(result);
	        out.print(data);
	        response.setStatus(200);
			
		} catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			
		} finally {
	        out.flush();
		}
	}


}


