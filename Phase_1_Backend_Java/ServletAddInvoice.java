package com.highradius;

import java.io.IOException;
import java.sql.Connection;
import java.sql.SQLException;
import java.text.ParseException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/ServletAddInvoice")
public class DummyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
 
    public DummyServlet() {
        super();
    }
    
    @Override
	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		try {
			Connection con=connection.getConnection();
			pojoAddInvoice obj=new pojoAddInvoice();
			obj.setName_customer(request.getParameter("customer-name"));
			obj.setCust_number(request.getParameter("customer-number"));
			obj.setDoc_id(request.getParameter("invoice-number"));
			//obj.setInvoice_id(request.getParameter("invoice-number"));
			obj.setDue_in_date(request.getParameter("due-date"));
			obj.setTotal_open_amount(request.getParameter("invoice-amount"));
			
			obj.setNotes(request.getParameter("notes"));
			try {
				DBbackendAddInvoice.addInvoice(con, obj);
				con.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} catch (ClassNotFoundException | ParseException e) {
			
			e.printStackTrace();
		}
    	response.sendRedirect("http://localhost:3000/1805083");
    	
	}

}
