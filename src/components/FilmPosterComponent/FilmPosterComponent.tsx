import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    zIndex: "auto",
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

export const FilmPosterComponent = ({ src, alt, isWatched, showImage, page }: FilmPosterComponent) => {
  const variant = isWatched ? "dot" : "standard";

  return (
    <Stack direction="row" spacing={2}>
      {page === "details" ? (
        <div style={{ paddingTop: "1rem" }}>
          <img
            src={`${src}?w=164&h=150&fit=crop&auto=format`}
            srcSet={`${src}?w=164&h=150&fit=crop&auto=format&dpr=2 2x`}
            alt={alt}
            width="250px"
          />
        </div>
      ) : (
        <StyledBadge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          variant={variant}
          sx={{ zIndex: "auto" }}
        >
          <Avatar
            alt={alt}
            src={src}
            sx={{ width: 56, height: 56 }}
            onClick={() => showImage !== undefined && showImage(true)}
          />
        </StyledBadge>
      )}
    </Stack>
  );
};

interface FilmPosterComponent {
  src: string;
  alt: string;
  isWatched: boolean;
  showImage?: (arg: boolean) => void;
  page?: string;
}
