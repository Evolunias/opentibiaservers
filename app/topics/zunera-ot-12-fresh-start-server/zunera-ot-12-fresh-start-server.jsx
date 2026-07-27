import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-fresh-start-server');
}

export default function ZuneraOt12FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-fresh-start-server" />;
}
