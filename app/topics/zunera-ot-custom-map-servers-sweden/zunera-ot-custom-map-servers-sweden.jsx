import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-sweden');
}

export default function ZuneraOtCustomMapServersSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-sweden" />;
}
