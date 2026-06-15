import type {Metadata} from "next";
import Box from "@mui/joy/Box";
import Chip from "@mui/joy/Chip";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Button from "@mui/joy/Button";
import Stack from "@mui/joy/Stack";
import {FaGithub, FaExternalLinkAlt} from "react-icons/fa";

export const metadata: Metadata = {
  title: "Programmer — Kazuma Yamasaki",
  robots: {
    index: false,
    follow: false,
  },
};

const skills = {
  Languages: ["Python", "TypeScript", "JavaScript", "Java", "Bash", "SQL"],
  Frameworks: ["Next.js", "React", "FastAPI", "Node.js"],
  Tools: ["Git", "Docker", "GitHub Actions", "VS Code", "Linux"],
  Research: ["Mining Software Repos", "Empirical SE", "Log Analysis"],
};

const projects = [
  {
    name: "hietan.com",
    description: "このポートフォリオサイト。Next.js 16 App Router + Carbon Design System + Joy UI で構築。",
    lang: "TypeScript",
    langColor: "#3178c6",
    href: "https://github.com/Hietan/hietan.github.io",
    topics: ["Next.js", "Carbon", "Joy UI"],
  },
  {
    name: "Research Tooling",
    description: "ソフトウェアリポジトリのマイニング・分析のためのスクリプト群。論文執筆の実験再現性を重視。",
    lang: "Python",
    langColor: "#3572a5",
    href: "https://github.com/Hietan",
    topics: ["MSR", "Data Analysis", "Automation"],
  },
  {
    name: "Log4j Study Dataset",
    description: "MSR 2025 論文「Mining for Lags in Updating Critical Security Threats」の再現データセット。",
    lang: "Python",
    langColor: "#3572a5",
    href: "https://github.com/Hietan",
    topics: ["Dataset", "Security", "Log4j"],
  },
];

export default function ProgrammerPage() {
  return (
    <Box sx={{maxWidth: 900, mx: "auto", px: {xs: 2, sm: 3}, py: 5}}>

      {/* Header */}
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={4} flexWrap="wrap" gap={2}>
        <Box>
          <Typography level="h1" sx={{color: "#e6edf3", mb: 0.5}}>
            Kazuma Yamasaki
          </Typography>
          <Typography level="body-md" sx={{color: "#8b949e", fontFamily: "var(--joy-fontFamily-code)"}}>
            <Typography component="span" sx={{color: "#7ee787"}}>const</Typography>
            {" role = "}
            <Typography component="span" sx={{color: "#a5d6ff"}}>&quot;Software Engineer & Researcher&quot;</Typography>
            {";"}
          </Typography>
        </Box>
        <Button
          component="a"
          href="https://github.com/Hietan"
          target="_blank"
          rel="noopener noreferrer"
          startDecorator={<FaGithub />}
          sx={{
            bgcolor: "#21262d",
            color: "#e6edf3",
            border: "1px solid #30363d",
            "&:hover": {bgcolor: "#30363d"},
          }}
        >
          @Hietan
        </Button>
      </Stack>

      <Divider sx={{borderColor: "#30363d", mb: 4}} />

      {/* Skills */}
      <Box mb={5}>
        <Typography level="h2" sx={{color: "#e6edf3", mb: 2.5}}>
          Tech Stack
        </Typography>
        <Stack gap={2}>
          {Object.entries(skills).map(([category, items]) => (
            <Stack key={category} direction="row" flexWrap="wrap" alignItems="center" gap={1}>
              <Typography
                level="body-xs"
                sx={{color: "#8b949e", fontFamily: "var(--joy-fontFamily-code)", minWidth: 90}}
              >
                {category}
              </Typography>
              {items.map(skill => (
                <Chip
                  key={skill}
                  size="sm"
                  sx={{
                    bgcolor: "#21262d",
                    color: "#e6edf3",
                    border: "1px solid #30363d",
                    fontSize: "0.75rem",
                    "--Chip-paddingInline": "0.6rem",
                  }}
                >
                  {skill}
                </Chip>
              ))}
            </Stack>
          ))}
        </Stack>
      </Box>

      <Divider sx={{borderColor: "#30363d", mb: 4}} />

      {/* Projects */}
      <Box mb={5}>
        <Typography level="h2" sx={{color: "#e6edf3", mb: 2.5}}>
          Projects
        </Typography>
        <Stack gap={2}>
          {projects.map(project => (
            <Card
              key={project.name}
              variant="outlined"
              sx={{
                bgcolor: "#161b22",
                border: "1px solid #30363d",
                "&:hover": {borderColor: "#58a6ff"},
                transition: "border-color 0.2s",
              }}
            >
              <CardContent>
                <Stack direction="row" justifyContent="space-between" alignItems="flex-start" mb={0.75}>
                  <Typography
                    level="title-md"
                    component="a"
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{
                      color: "#58a6ff",
                      textDecoration: "none",
                      "&:hover": {textDecoration: "underline"},
                      display: "flex",
                      alignItems: "center",
                      gap: 0.75,
                    }}
                  >
                    {project.name}
                    <FaExternalLinkAlt size={11} />
                  </Typography>
                </Stack>
                <Typography level="body-sm" sx={{color: "#8b949e", mb: 1.5, lineHeight: 1.7}}>
                  {project.description}
                </Typography>
                <Stack direction="row" gap={1} flexWrap="wrap" alignItems="center">
                  <Stack direction="row" alignItems="center" gap={0.5} mr={1}>
                    <Box
                      component="span"
                      sx={{
                        width: 10, height: 10, borderRadius: "50%",
                        bgcolor: project.langColor, flexShrink: 0,
                      }}
                    />
                    <Typography level="body-xs" sx={{color: "#8b949e"}}>
                      {project.lang}
                    </Typography>
                  </Stack>
                  {project.topics.map(t => (
                    <Chip
                      key={t}
                      size="sm"
                      sx={{
                        bgcolor: "rgba(56, 139, 253, 0.1)",
                        color: "#58a6ff",
                        border: "1px solid rgba(56,139,253,0.4)",
                        fontSize: "0.6875rem",
                        "--Chip-paddingInline": "0.5rem",
                      }}
                    >
                      {t}
                    </Chip>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Box>

      <Divider sx={{borderColor: "#30363d", mb: 4}} />

      {/* Environment */}
      <Box mb={4}>
        <Typography level="h2" sx={{color: "#e6edf3", mb: 2.5}}>
          Environment
        </Typography>
        <Card
          variant="outlined"
          sx={{bgcolor: "#161b22", border: "1px solid #30363d"}}
        >
          <CardContent>
            <Box
              sx={{
                fontFamily: "var(--joy-fontFamily-code)",
                fontSize: "0.8125rem",
                lineHeight: 2,
                color: "#8b949e",
              }}
            >
              {[
                ["OS", "macOS / Ubuntu (WSL2)"],
                ["Editor", "Visual Studio Code"],
                ["Shell", "zsh"],
                ["Version Control", "Git + GitHub"],
                ["Container", "Docker"],
                ["CI/CD", "GitHub Actions"],
              ].map(([key, value]) => (
                <Box key={key} component="div">
                  <Typography component="span" sx={{color: "#7ee787", fontFamily: "inherit"}}>
                    {key}
                  </Typography>
                  <Typography component="span" sx={{color: "#e6edf3", fontFamily: "inherit"}}>
                    {": "}
                  </Typography>
                  <Typography component="span" sx={{color: "#a5d6ff", fontFamily: "inherit"}}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>

    </Box>
  );
}
