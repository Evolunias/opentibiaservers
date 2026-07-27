import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-fresh-start-server');
}

export default function ZuneraOt14FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-fresh-start-server" />;
}
