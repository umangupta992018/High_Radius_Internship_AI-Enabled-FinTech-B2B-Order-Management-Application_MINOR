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

@WebServlet("/EditFunc")
public class EditFunc extends HttpServlet {
	
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		response.setContentType("application/json");  
		
        PrintWriter out=response.getWriter();
        String temp_id=request.getParameter("id");  
        Double id=Double.parseDouble(temp_id);
        String temp_amount=request.getParameter("amount");  
        double amount=Double.parseDouble(temp_amount);
        String notes = request.getParameter("notes");
        System.out.print(id);
 
        
        try{String dbDriver = "com.mysql.cj.jdbc.Driver"; 
        String dbURL = "jdbc:mysql://localhost:3306/"; 
        String dbName = "h2h_internship"; 
        String dbUsername = "root"; 
        String dbPassword = "root"; 
        
  
        Class.forName(dbDriver); 
        Connection con = DriverManager.getConnection(dbURL + dbName, dbUsername, dbPassword); 
        
        PreparedStatement ps=con.prepareStatement("UPDATE invoice_details SET total_open_amount=? , notes=? WHERE invoice_id = ?");  
        ps.setDouble(1,amount);
        ps.setString(2,notes);
        ps.setDouble(3,id);
        ps.executeUpdate();
        response.setStatus(200);
        con.close();
        
        }catch (Exception e) {
			e.printStackTrace();
			response.setStatus(400);
			
		} finally {
	        out.flush();
		}
	}

}

	
		
	