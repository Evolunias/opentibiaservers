import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('xenobot');
}

export default function XenobotPage() {
  return <StaticExactMatchPage slug="xenobot" />;
}
