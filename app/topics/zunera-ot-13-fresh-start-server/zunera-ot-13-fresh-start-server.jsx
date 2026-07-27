import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-fresh-start-server');
}

export default function ZuneraOt13FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-fresh-start-server" />;
}
