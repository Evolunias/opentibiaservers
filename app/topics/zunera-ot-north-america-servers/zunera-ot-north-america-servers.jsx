import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-north-america-servers');
}

export default function ZuneraOtNorthAmericaServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-north-america-servers" />;
}
