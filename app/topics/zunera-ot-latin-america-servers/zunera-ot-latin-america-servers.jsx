import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-latin-america-servers');
}

export default function ZuneraOtLatinAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-latin-america-servers" />;
}
