import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-north-america-server');
}

export default function ZuneraOtNorthAmericaServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-north-america-server" />;
}
