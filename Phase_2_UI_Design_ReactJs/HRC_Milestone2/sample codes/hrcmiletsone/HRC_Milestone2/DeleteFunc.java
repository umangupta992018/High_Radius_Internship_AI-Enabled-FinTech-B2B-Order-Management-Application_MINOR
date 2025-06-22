package com.HRC_Milestone2;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/DeleteFunc")
public class DeleteFunc extends HttpServlet {
	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = response.getWriter();
		String[] sid=request.getParameterValues("id");  
        
        try{  
        	String dbDriver = "com.mysql.cj.jdbc.Driver"; 
	        String dbURL = "jdbc:mysql://localhost:3306/"; 
	        String dbName = "h2h_internship"; 
	        String dbUsername = "root"; 
	        String dbPassword = "root"; 
	        
	  
	        Class.forName(dbDriver); 
	        Connection con = DriverManager.getConnection(dbURL + dbName, dbUsername, dbPassword); 
	        for(int i=0;i<sid.length;i++)
	        {
	        	PreparedStatement ps=con.prepareStatement("DELETE FROM invoice_details WHERE invoice_id = ?");
	        	ps.setInt(1,Integer.parseInt(sid[i]));
	        	ps.executeUpdate();
	        }
	        response.setStatus(200);
	        con.close();
	        
        }
        catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			
		} finally {
	        out.flush();
		}
	}

}


