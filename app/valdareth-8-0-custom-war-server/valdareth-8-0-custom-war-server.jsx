import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('valdareth-8-0-custom-war-server');
}

export default function Valdareth80CustomWarServerPage() {
  return <StaticExactMatchPage slug="valdareth-8-0-custom-war-server" />;
}
