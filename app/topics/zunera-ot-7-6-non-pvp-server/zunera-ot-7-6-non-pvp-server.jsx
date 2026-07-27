import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-6-non-pvp-server');
}

export default function ZuneraOt76NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-6-non-pvp-server" />;
}
