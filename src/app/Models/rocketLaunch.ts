export interface IRocketLaunch {
  flight_number: number;
  mission_name: string;
  mission_id: string;
  launch_year: string;
  launch_success: boolean;
  rocket: { first_stage: { Cores: ICores[] } };
  links: { mission_patch_small: string };
}

interface ICores {
  land_success: boolean;
}
