import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-latin-america-server');
}

export default function ZuneraOtLatinAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-latin-america-server" />;
}
