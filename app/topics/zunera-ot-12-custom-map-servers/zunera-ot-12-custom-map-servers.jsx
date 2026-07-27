import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-custom-map-servers');
}

export default function ZuneraOt12CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-custom-map-servers" />;
}
