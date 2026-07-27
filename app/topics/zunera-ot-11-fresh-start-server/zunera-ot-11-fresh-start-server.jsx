import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-fresh-start-server');
}

export default function ZuneraOt11FreshStartServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-fresh-start-server" />;
}
