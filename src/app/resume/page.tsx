"use client";

import { motion } from "framer-motion";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../components/ui/tabs";
import Education from "@/components/resume-components/Education";
import Skills from "@/components/resume-components/Skills";
import ExtraSkills from "@/components/resume-components/ExtraSkills";

const Resume: React.FC = () => {
  return (
    <section className="min-h-[75vh] flex justify-center items-center mt-7 overflow-x-hidden">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
        >
          {/* Buttons */}
          <Tabs
            defaultValue="education"
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
          >
            <TabsList className="flex flex-col gap-4 w-full">
              {/* Education */}
              <TabsTrigger className="w-full" value="education">
                Education
              </TabsTrigger>

              {/* Skills */}
              <TabsTrigger className="w-full" value="skills">
                Skills
              </TabsTrigger>

              {/* ExtraSkills */}
              <TabsTrigger className="w-full" value="extraSkills">
                ExtraSkills
              </TabsTrigger>
            </TabsList>

            <div>
              {/* Education */}
              <TabsContent value="education">
                <Education />
              </TabsContent>

              {/* Skills */}
              <TabsContent value="skills">
                <Skills />
              </TabsContent>

              {/* ExtraSkills */}
              <TabsContent value="extraSkills">
                <ExtraSkills />
              </TabsContent>
            </div>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
