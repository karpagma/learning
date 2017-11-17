using System;
using System.IO;
using Microsoft.Extensions.Configuration;

namespace QuickTry
{
    class Program
    {
        static void Main(string[] args)
        {
            try
            {
                var configuration = new ConfigurationBuilder()
                    .SetBasePath(Directory.GetCurrentDirectory())
                    .AddJsonFile("appsettings.json")
                    .Build();
                    

                object obj = configuration["enabled"];
                //bool abc = (bool) obj;

                Console.WriteLine(obj);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.ToString());
            }
                                    
        }
    }
}
