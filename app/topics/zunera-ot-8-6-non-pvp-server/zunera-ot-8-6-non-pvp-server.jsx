import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-8-6-non-pvp-server');
}

export default function ZuneraOt86NonPvpServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-8-6-non-pvp-server" />;
}
