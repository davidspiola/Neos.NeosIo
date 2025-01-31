import {h} from 'preact';
import * as React from "preact/compat";

export default function ProviderListEntry({provider}: {provider: Provider}) {
    return (
        <tr key={provider.identifier}>
            <td><a href={provider.url} title={provider.title}>{provider.title}</a></td>
            <td>
                {provider.street ? (
                    <address>{provider.street} {provider.zipcode} {provider.city} {provider.country}</address>
                ) : 'N/A'}
            </td>
            <td>{provider.typesOfService.length ? provider.typesOfService.join(', ') : 'N/A'}</td>
            <td>{provider.size ? provider.size : 'N/A'}</td>
        </tr>
    )
}
