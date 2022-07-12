using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
        [RoutePrefix("Api/Student")]
        public class StudentController : ApiController
        {
            CrudDemoEntities DB = new CrudDemoEntities();
            [Route("AddotrUpdatestudent")]
            [HttpPost]
            public object AddotrUpdatestudent(Student st)
            {
                try
                {
                    if (st.Id == 0)
                    {
                        studentmaster sm = new studentmaster();
                        sm.Name = st.Name;
                        sm.RollNo = st.Rollno;
                        sm.Address = st.Address;
                        sm.Class = st.Class;
                        DB.studentmasters.Add(sm);
                        DB.SaveChanges();
                        return new Response
                        {
                            Status = "Success",
                            Message = "Data Successfully"
                        };
                    }
                    else
                    {
                        var obj = DB.studentmasters.Where(x => x.Id == st.Id).ToList().FirstOrDefault();
                        if (obj.Id > 0)
                        {

                            obj.Name = st.Name;
                            obj.RollNo = st.Rollno;
                            obj.Address = st.Address;
                            obj.Class = st.Class;
                            DB.SaveChanges();
                            return new Response
                            {
                                Status = "Updated",
                                Message = "Updated Successfully"
                            };
                        }
                    }
                }
                catch (Exception ex)
                {
                    Console.Write(ex.Message);
                }
                return new Response
                {
                    Status = "Error",
                    Message = "Data not insert"
                };

            }
            [Route("Studentdetails")]
            [HttpGet]
            public object Studentdetails()
            {

                var a = DB.studentmasters.ToList();
                return a;
            }

            [Route("StudentdetailById")]
            [HttpGet]
            public object StudentdetailById(int id)
            {
                var obj = DB.studentmasters.Where(x => x.Id == id).ToList().FirstOrDefault();
                return obj;
            }
            [Route("Deletestudent")]
            [HttpDelete]
            public object Deletestudent(int id)
            {
                var obj = DB.studentmasters.Where(x => x.Id == id).ToList().FirstOrDefault();
                DB.studentmasters.Remove(obj);
                DB.SaveChanges();
                return new Response
                {
                    Status = "Delete",
                    Message = "Delete Successfuly"
                };
            }
        }
    }
