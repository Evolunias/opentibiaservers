import StaticExactMatchPage, { buildExactMatchMetadata } from '@/lib/static-page-renderers';

export function generateMetadata() {
  return buildExactMatchMetadata('valoria');
}

export default function ValoriaPage() {
  return <StaticExactMatchPage slug="valoria" />;
}
